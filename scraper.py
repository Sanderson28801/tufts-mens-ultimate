import requests
import re   
import json
from bs4 import BeautifulSoup

# 1. Define the target URL
# (Replace this with the exact USAU page you want to scrape)
BASE_URL = "https://play.usaultimate.org/teams/events/Eventteam/?TeamId="
TEAM_NAMES = ["Tufts-Emen", "Tufts-Bmen"]
TEAM_IDS = [
    "i1SJ9oGYLfAmbRh%2bniafIRw2f4L5Re%2fIBP1AK76GL50%3d",
    "nKNzC8lqzaBMOrivIvzGnCT2qIUEfEUzFT5xoQ62H5U%3d",
]

TEAM_URLS = [f"{BASE_URL}{team_id}" for team_id in TEAM_IDS]
# 2. Mask the script as a normal web browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# 3. Fetch the HTML from the website

for url, team_name in zip(TEAM_URLS,TEAM_NAMES):
    print(f"Fetching pages for {team_name}...")
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        
        # --- 1. EXTRACT PLAYER NAMES (First Table) ---
        roster_table = soup.find('table') 
        players = []

        if roster_table:
            for row in roster_table.find_all('tr')[1:]:
                cells = row.find_all('td')
                if cells:
                    link = cells[1].find('a')
                    name = link.text.strip() if link else cells[1].text.strip()
                    if name and name not in players:
                        players.append(name)

        # --- 2. PARSE SCHEDULE & GAMES ---
        games_table = soup.find('table', class_='schedule_table')

        grouped_schedule = []  # Grouped by tournament (Great for UI accordions/sections)
        flat_games = []        # All games in one flat array
        current_tournament = None

        if games_table:
            for row in games_table.find_all('tr'):
                cells = row.find_all(['th', 'td'])
                row_text = [cell.text.strip() for cell in cells if cell.text.strip()]
                
                if not row_text:
                    continue
                
                # Check if the row is a game row (contains score splitter standard format)
                # Row format: ['January 30', '13 - 9', 'Virginia']
                if len(row_text) >= 3 and '-' in row_text[1]:
                    date_str = row_text[0]
                    score_str = row_text[1]
                    opponent = row_text[2]
                    
                    # Parse scores into integers
                    scores = score_str.split('-')
                    our_score = int(scores[0].strip())
                    opp_score = int(scores[1].strip())
                    result = "W" if our_score > opp_score else "L"
                    
                    game_obj = {
                        "tournament": current_tournament,
                        "date": date_str,
                        "opponent": opponent,
                        "our_score": our_score,
                        "opponent_score": opp_score,
                        "result": result
                    }
                    
                    # Append to flat list
                    flat_games.append(game_obj)
                    
                    # Append to current tournament group
                    if grouped_schedule and grouped_schedule[-1]["tournament"] == current_tournament:
                        grouped_schedule[-1]["games"].append(game_obj)
                
                # Otherwise, this row represents a Tournament Header
                else:
                    current_tournament = row_text[0]
                    grouped_schedule.append({
                        "tournament": current_tournament,
                        "games": []
                    })

        # --- 3. PARSE COACHES ---
        coaches_list = soup.find('dl', id='CT_Main_0_ucTeamDetails_dlHeadCoach')
        coaches = []

        if coaches_list:
            # 1. First attempt: grab text from individual <a> links inside <dl>
            links = coaches_list.find_all('a')
            if links:
                for a in links:
                    name = a.text.strip()
                    if name and name not in coaches:
                        coaches.append(name)
            
            # 2. Fallback: If <a> links weren't found, parse the raw text
            if not coaches:
                raw_text = coaches_list.text
                
                # Remove label prefixes like "Coaches:" or "(Head Coach)"
                clean_text = re.sub(r'Coaches:\s*', '', raw_text)
                clean_text = re.sub(r'\(Head Coach\)', '', clean_text)
                
                # Extract full names (First Last) using Regex pattern matching
                # Matches capitalized First and Last names (e.g., "Gene Buonaccorsi", "Jesse Strod")
                extracted_names = re.findall(r'[A-Z][a-zA-Z\'-]+\s+[A-Z][a-zA-Z\'-]+', clean_text)
                
                for name in extracted_names:
                    if name not in coaches:
                        coaches.append(name)


        # --- 3b. MANUAL EDIT & REORDERING ---
        if team_name == "Tufts-Emen":
            missing_coach = "Jerry Wang"  # Replace with actual missing coach name
            if missing_coach not in coaches:
                coaches.append(missing_coach)

            # Example: Move 'Jerry Wang' to index 0 (if not already first)
            head_coach_name = "Jerry Wang"
            if head_coach_name in coaches:
                coaches.remove(head_coach_name)
                coaches.insert(0, head_coach_name) # Insert at top of list

        
        # --- 4. COMBINE INTO FINAL DATA STRUCTURE ---
        team_data = {
            "players": players,
            "coaches": coaches,
            "schedule": grouped_schedule, # Use flat_games here if your UI prefers a flat array
            "stats_summary": {
                "total_games": len(flat_games),
                "wins": sum(1 for g in flat_games if g["result"] == "W"),
                "losses": sum(1 for g in flat_games if g["result"] == "L")
            }
        }

        # --- 5. EXPORT TO JSON FOR FRONTEND ---
        with open(f"{team_name}.json", "w") as f:
            json.dump(team_data, f, indent=4)

        print(f"Data saved! Extracted {len(players)} players, {len(flat_games)} games, and {len(coaches)} coaches.")
    else:
        print(f"Failed to fetch page. Status code: {response.status_code}")