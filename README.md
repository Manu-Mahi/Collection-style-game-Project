# 🎮 Tangled themed Hope Catcher - A Game About Sustaining Hope

**"Always Stay Hopeful!"**

A browser-based catching game built with p5.play that combines gameplay with an uplifting message about maintaining hope through challenges.

---

## 📋 Table of Contents
- [Game Overview](#game-overview)
- [How to Play](#how-to-play)
- [Game Mechanics](#game-mechanics)
- [Project Requirements](#project-requirements)
- [Technical Implementation](#technical-implementation)
- [Assets & Resources](#assets--resources)
- [Installation & Setup](#installation--setup)
- [Future Enhancements](#future-enhancements)
- [Credits & Attributions](#credits--attributions)

---

## 🎯 Game Overview

**Hope Catcher** is an interactive catching game where players help Flynn climb to safety by catching falling lamps (sources of hope) while avoiding bombs (obstacles). The game metaphorically represents sustaining hope through life's challenges - catching positive elements while dodging negativity.

### Game Concept
- **Theme:** Hope and perseverance
- **Objective:** Reach 10 Hope Points to help Flynn complete his climb
- **Message:** Even when we face obstacles, maintaining hope helps us rise above challenges

### Key Features
- 🎨 Custom artwork and sprite-based graphics
- 🎯 Progressive difficulty with randomized falling speeds
- 📊 Real-time score tracking (Hope Points)
- 🧗 Visual progress indicator (Flynn climbing)
- 🎊 Victory screen with encouraging message
- 🔄 Instant replay functionality

---

## 🕹️ How to Play

### Controls
- **Left Arrow Key** ← Move catcher left
- **Right Arrow Key** → Move catcher right
- **Mouse Click** (on win screen) - Play again

### Objective
Catch **10 lamps** to win the game and help Flynn reach the top!

### Scoring System
- **Catch a Lamp** 💡 = +1 Hope Point (Flynn climbs up)
- **Catch a Bomb** 💣 = -1 Hope Point (Flynn falls down)
- **Miss a Lamp** = -1 Hope Point

### Win Condition
Reach **10 Hope Points** to see the victory message and help Flynn complete his journey!

---

## ⚙️ Game Mechanics

### Falling Objects
- **Lamps (Good Objects)**
  - Represent sources of hope and positivity
  - Random spawn positions across the top
  - Variable falling speeds (1-5 pixels per frame)
  - Reset to top when caught or missed

- **Bombs (Bad Objects)**
  - Represent obstacles and challenges
  - Random spawn positions and speeds
  - Penalize player when caught
  - Reset to top when caught or missed

### Player Movement
- Catcher moves horizontally with arrow keys
- Movement is constrained to playable area (x: 50-350)
- Smooth velocity-based controls

### Visual Feedback
- **Flynn (Climber)** moves up/down based on performance
- **Hope Points** displayed in real-time
- **Background** creates atmospheric setting
- **Victory Screen** provides positive reinforcement

---

## 📝 Project Requirements

This game was developed as part of the **Girls Who Code Game Jam** and meets the following requirements:

### ✅ Clear Goal & Rules
- Catch lamps, avoid bombs, reach 10 points
- Simple arrow key controls
- Instant visual feedback

### ✅ Game Jam Prompt Response
- **Theme:** Hope and perseverance
- **Implementation:** Gameplay mechanics reinforce the importance of maintaining hope despite setbacks

### ✅ UX Design Principle
- **Feedback:** Immediate visual and numerical feedback for all player actions
- **Constraints:** Controlled movement area prevents confusion
- **Consistency:** Predictable object behavior and scoring

### ✅ MVP Version
- Core catching mechanics implemented
- Win condition functional
- Replay feature working
- All essential features present

### ✅ Code Readability
- Comprehensive comments throughout code
- Clear variable naming
- Organized function structure
- Modifiable for future developers

### ✅ Playtesting & Iteration
- Game balance adjusted based on feedback
- Difficulty curve refined
- Visual elements optimized for clarity

---

## 🛠️ Technical Implementation

### Technologies Used
- **p5.js** - Creative coding library for graphics and animation
- **p5.play** - Game sprite and physics library
- **Planck.js** - Physics engine
- **HTML5** - Web structure
- **CSS3** - Styling
- **JavaScript** - Game logic

### Code Structure

```javascript
// Main Components
- Variables: Game state, sprites, score tracking
- preload(): Load all image assets
- setup(): Initialize canvas, sprites, and game state
- draw(): Main game loop with collision detection
- youWin(): Victory screen display
- restart(): Reset game state for replay
```

### Key Features Implementation

**Sprite Management**
- Sprites created with custom images
- Collision detection between catcher and falling objects
- Position constraints to keep gameplay in bounds

**Randomization**
- Random spawn positions for variety
- Variable falling speeds for challenge
- Prevents predictable gameplay

**State Management**
- Score tracking (Hope Points)
- Climber position updates
- Victory condition checking
- Game reset functionality

---

## 🎨 Assets & Resources

### Image Assets
All assets are located in the `assets/` folder:

- `bkImg.jpeg` - Background image
- `flynn.png` - Climber character sprite
- `lamp.png` - Good falling object (hope symbol)
- `bomb.png` - Bad falling object (obstacle)
- `catchers.png` - Player-controlled catcher sprite

### Asset Sizing
- Background: 680px width (auto height)
- Flynn: 90px width (auto height)
- Lamp: 70px width (auto height)
- Bomb: 40px width (auto height)
- Catcher: 80px width (auto height)

---

## 💻 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code recommended)
- Internet connection (for CDN libraries)

### Quick Start

1. **Download the project files**
   ```
   hope-catcher/
   ├── index.html
   ├── script.js
   ├── style.css
   └── assets/
       ├── bkImg.jpeg
       ├── flynn.png
       ├── lamp.png
       ├── bomb.png
       └── catchers.png
   ```

2. **Open the game**
   - Double-click `index.html` to open in your browser
   - OR use VS Code Live Server for best results

3. **Start playing!**
   - Use arrow keys to move the catcher
   - Catch lamps to earn Hope Points
   - Reach 10 points to win

### No Installation Required
All dependencies are loaded via CDN links in the HTML file:
- p5.js library
- p5.sound addon
- Planck.js physics engine
- p5.play game library

---

## 🚀 Future Enhancements

### Planned Features
- 🎵 **Sound Effects**
  - Catching sounds
  - Background music
  - Victory fanfare

- 📊 **Difficulty Levels**
  - Easy, Medium, Hard modes
  - Adjustable falling speeds
  - More/fewer falling objects

- 💾 **Score Persistence**
  - High score tracking
  - Local storage integration
  - Player name input

- 🎮 **Additional Gameplay**
  - Power-ups (slow time, score multiplier)
  - Multiple levels with themes
  - Boss encounters

- 📱 **Mobile Support**
  - Touch controls
  - Responsive canvas sizing
  - Gyroscope tilt controls

- 🎨 **Visual Enhancements**
  - Particle effects
  - Smoother animations
  - Background variations

### Extension Ideas
- Add lives system (3 strikes and you're out)
- Create multiple characters to choose from
- Implement combo system for consecutive catches
- Add story mode with dialogue
- Create leaderboard system
- Port to mobile platforms

---

## 👥 Credits & Attributions

### Development
- **Project Type:** Girls Who Code Game Jam Guided Project
- **Developer:** [Manushree]
- **Course:** Girls Who Code Summer Immersion Program
- **Framework:** p5.play v3

### Libraries & Tools
- [p5.js](https://p5js.org/) - Creative coding library (LGPL License)
- [p5.play](https://p5play.org/) - Game development library (LGPL License)
- [Planck.js](https://piqnt.com/planck.js/) - Physics engine (MIT License)

### Assets
Assets & Image Credits
All game assets are from Disney's Tangled (2010):

Background Image (bkImg.jpeg): Rapunzel's Tower from Tangled - © Disney
Flynn Rider Sprite (flynn.png): Character artwork from Tangled - © Disney
Lantern Sprite (lamp.png): Tangled-style floating lantern with Corona sun symbol - © Disney
Bomb Sprite (bomb.png): Simple bomb graphic for obstacles
Catcher Sprite (catchers.png): Custom game element

Copyright Notice: This is a non-commercial educational project created for Girls Who Code. All Disney Tangled imagery is property of Walt Disney Animation Studios and is used here for educational purposes only under fair use guidelines. This project is not affiliated with or endorsed by Disney.
Concept: Original game mechanics and design developed for GWC Game Jam

### Inspiration
- Classic catching games (Kaboom!, Ice Cold Beer)
- Tangled movie themes (hope, perseverance, dreams)

### Special Thanks
- Girls Who Code instructors and mentors
- Game Jam participants for playtesting feedback
- p5.play community for documentation and examples

---

## 📄 License

This project was created for educational purposes as part of the Girls Who Code program. Feel free to use this code for learning, but please provide attribution if you share or modify it.

---

## 🐛 Known Issues & Troubleshooting

### Common Issues

**Images not loading?**
- Verify all image files are in the `assets/` folder
- Check that file names match exactly (case-sensitive)
- Ensure file paths use forward slashes `/`

**Game running slowly?**
- Close other browser tabs
- Try a different browser
- Check internet connection (CDN libraries need to load)

**Controls not working?**
- Click on the game canvas to focus it
- Ensure keyboard focus is on the browser window
- Try refreshing the page

---

