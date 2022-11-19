# SCORE API

## ABOUT

The Score API is a very simple API designed to access and store game scores on a Database.

## CORE REQUIREMENTS

- Create a schema with two properties { initials : String required, score : Number required } and a timeStamp
- Develop a Create and Read routes
    - Create
    - Read
        - Read ALL
        - Read By ID
        - Read ALL By Initials

## STRETCH REQUIREMENTS

- Add Sorting Functionality
    - Sort by Initials (user)
    - Sort by Score (High - Low)
    - Sort by Date
- Additional Routes
    - Read
        - Read Highest By Initials
        - Read Highest By Date
        - Read Top 10
        - Read Top 25
        - Read Top 50
        - Read Top 100
        - Read Custom Range

## TO-DO

1. Set Up Express
    1. Install
    2. Require
    3. Initialize Server
    3. Define Routes
    5. Listen

2. Set Up Mongo
    1. Install
    2. Require
    3. Define Schema
    4. Define Model
    5. Seed Data

3. Test with POSTMAN