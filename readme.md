# Sorting and Searching Visualizer

[![CodeFactor](https://www.codefactor.io/repository/github/anandman03/sorting-and-searching-visualizer/badge/master)](https://www.codefactor.io/repository/github/anandman03/sorting-and-searching-visualizer/overview/master) [![CodeScene Code Health](https://codescene.io/projects/9235/status-badges/code-health)](https://codescene.io/projects/9235) [![CodeScene System Mastery](https://codescene.io/projects/9235/status-badges/system-mastery)](https://codescene.io/projects/9235) [![DeepScan grade](https://deepscan.io/api/teams/10851/projects/13754/branches/239584/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=10851&pid=13754&bid=239584)

This is a progressive web app built using HTML, CSS and Javascript to visualize classic sorting algorithms such as insertion sort, selection sort and searching algorithms such as linear and binary search.

This app is deployed with GitHub pages and can be accessed here: [Link](https://anandman03.github.io/sorting-and-searching-visualizer/). I hope you have fun playing around with it.

![Home](https://github.com/anandman03/sorting-and-searching-visualizer/blob/master/assets/images/home.PNG)

## Purpose

I wanted to improve my skills with HTML, CSS, JavaScript and also learn classic sorting algorithms. This project turned out to be a great way to achieve both of the aforementioned objectives at the same time.

## Conventions

* `index.html` - This file contains the code for Home page.

* `views` - This folder contains the HTML files for viewing different algorithms. Each HTML file contains some introduction about algorithm, it's complexity, control panel and list elements for visualizations.

The `public` folder contains three subdirectories : 

* `css` - This folder contains the CSS files that only contain CSS custom properties declarations (also known as CSS variables) for the entirety of the app. These files are used to determine the overall look and feel of the application as all components rely upon these variables.

* `js` - This folder contains the JavaScript files for implementing the sorting and searching algorithms along with seperate files for controls and random list generation.

* `partials` - This folder contains the header and footer displayed on each webpage. So instead of copy pasting whole code in each file, it's most convinent way to add these content to JavaScript files and just include each file at the right place.

## Design

![Search](https://github.com/anandman03/sorting-and-searching-visualizer/blob/master/assets/images/search.PNG)
![Sort](https://github.com/anandman03/sorting-and-searching-visualizer/blob/master/assets/images/sort.PNG)