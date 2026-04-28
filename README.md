## Pressure- a high school decision sim 
**WEB-115_FinalProject_Omoniyi
Iremide Omoniyi**

---
**Summary/ Overview**  

Pressure is an interactive story-based web app where the user plays as a high school student trying to balance different aspects of their life, including sports, school, friendships, family responsibilities and their wellbeing.

The user is presented with real scenarios, and they have to make decisions that affect their stress levels, performance in sports, and relationships. Each of their decisions will lead to a different story path and multiple endings.

Target users are students or anyone who like interactive stories.

The app is designed to simulate real challenges that students face, where most of the time there isn't a perfect choice more like tradeoffs. 


---
## Features

 - Start a neew story as a student managing multiple responsibilities
 - The scenarios include school, sports, friends and family
 - there are multiple choices for each scenarios 
 - the choices affct player states like 
			 - Performance in school
			 - Stress
			 - Performance in Spports
			 - Relationships
	
 - The story progresses based off the deciosions you pick and stat levels
 - Restart option to explaore different outcomes

---
## Core Requirements

**If statement and loops**
If statements will control how the game goes based of the user choices and the current stats. and loops will be used to create available choices for each scene 

**Event listeners**
Event listeners will detect the user actions like a clicking decision button. then these events will trigger updates in the stats ,and  change the scenes.

**Dom element creation**
All the story stuff including the scenes, text, and desicion buttons will be created using createElement() and appendChild(). the html buttons will only contain a basic layout, while the javascript creates all the elements you interact with.

**Classes and subclasses**

 - A player class to basically track the stats like stress, academics, athletic, and relationships
 - A scene class to represent each story event and the choices
 - A base story class to manage the progress and state
 - a subclass extending story to handle the specific game logic, the branching paths, and ending conditions 


*

## *DLC*
**Jsonson and local storage**
Story data will be stored in a json strucure the users progress will be saved using localstorage with JSON.stringify()

When the user visits the app again, JSON.parse() will restore their progress so they can continue from where they left off.


## Tech Stack

 - Html
 - Css
 - Vanilla js
 - JSonson for story structure
 - local storage for saving progress
 - vs code + github
