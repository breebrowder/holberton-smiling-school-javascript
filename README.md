# Holberton School Curriculum: 0x00. Build a web app in JavaScript

## Project

1. [Build a web app in JavaScript](https://intranet.hbtn.io/projects/1691)

In this project, you will finalize the previous project [0x0B. Implement a design with bootstrap](https://intranet.hbtn.io/projects/1687) and make some parts dynamic with Javascript (JQuery exactly).

You will reuse final files of [0x0B. Implement a design with bootstrap](https://intranet.hbtn.io/projects/1687) and update them.

You will use all HTML/CSS/Accessibility/Responsive design/Bootstrap/Javascript knowledges that you learned previously.

You won’t have a lot of instruction, you are free to implement it the way that you want - the objective is simple: Have fully functional web pages that look the same as the designer file.

**Here the final result on both desktop and mobile versions:**

![alt text](https://github.com/breebrowder/holberton-smiling-school_v2/blob/main/readme_assets/all-three_verisons.jpg)


##### This webpage has been designed by Nicolas Philippot, UI/UX designer.

- [Prototype: Hompeage](https://www.figma.com/file/OBKqrpHdl4oFmYecMQIorA/Homepage-(Copy))
- [Prototype: Pricing](https://www.figma.com/file/IyFWRKuqs4cg9dQJWNlawq/Pricing-(Copy))
- [Prototype: Courses](https://www.figma.com/file/Oec2KeHHOTsDeP0qdUAjBf/Courses-(Copy))

### Requirements

* You have to use Bootstrap
* Your styles.css must be as small as you can - you must use as much as you can Bootstrap classes
* You have to use JQuery
* Your scripts.js must contain all your Javascript part
* Your Javascript must be executed only when the document is loaded

### Imports

#### For this project, you will need: fonts from Google, JQuery, Bootstrap CSS/JS

Check the [project page](https://intranet.hbtn.io/projects/1691) for imports.

# TASKS
## 0. Reuse and polish your Bootstrap integration
Copy files from [0x0B. Implement a design with bootstrap](https://intranet.hbtn.io/projects/1687):

* homepage.html -> 0-homepage.html
* pricing.html -> 0-pricing.html
* courses.html -> 0-courses.html
* styles.css and any files/folders needed (images, fonts…)

And finalize the design if it’s not done yet - the final result should be the same as these screens:

* [Homepage](https://www.figma.com/file/QYQqMYbdpAHL5xTclwJKSI/Homepage?node-id=0%3A1)
* [Pricing](https://www.figma.com/file/KLAI53jdYpfFNEy0O79ymB/Pricing)
* [Courses](https://www.figma.com/file/ivg3abH1HLmMayBgjGg1Qf/Courses)

Important notes with Figma:

if your computer doesn’t have missing fonts, you can find them here: source-sans-pro and Spin-Cycle-OT
some values are in float - feel free to round them
“Be pixel perfect” - yes! but mainly make sure colors, size and position are correct. #C271FF is not purple.
For this task, please write an amazing README.md

Interactions note:

Web pages must switch to the tablet version when the screen width is 768px
Web pages must switch to the mobile version when the screen width is 576px
button hover/active: opacity: 0.9

##### Repo:
````
GitHub repository: holberton-smiling-school_v2
File: 0-homepage.html, 0-pricing.html, 0-courses.html, styles.css, README.md
````

## 1. Homepage - quotes
From 0-homepage.html, create 1-homepage.html.

Replace static quotes by dynamic loading:

* URL: https://smileschool-api.hbtn.info/quotes
* No static quotes should be present in the quotes section
* During the Ajax request, a loader should be present
* Carousel should work like before

Example of my loader:
`````
HTML:
<div class="loader"></div>
CSS:
.loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid #C271FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
    margin: auto;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`````

Final result:
![alt text](https://github.com/breebrowder/holberton-smiling-school_v2/blob/main/readme_assets/carosuel.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school_v2
File: 1-homepage.html
````

## 2. Homepage - popular tutorials
From 1-homepage.html, create 2-homepage.html.

Replace static video cards by dynamic loading:

* URL: https://smileschool-api.hbtn.info/popular-tutorials
* No static video cards should be present in the section
* During the Ajax request, a loader should be present
* Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
* Don’t forget the responsive part!


Final result:
![alt text](https://github.com/breebrowder/holberton-smiling-school_v2/blob/main/readme_assets/popular-tutorials.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school_v2
File: 2-homepage.html
````

## 3. Homepage - latest videos
From 2-homepage.html, create homepage.html.

Replace static video card by dynamic loading:

* URL: https://smileschool-api.hbtn.info/latest-videos
* No static video cards should be present in the section
* During the Ajax request, a loader should be present
* Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
* Don’t forget the responsive part!


Final result:
![alt text](https://github.com/breebrowder/holberton-smiling-school_v2/blob/main/readme_assets/latest-videos.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school_v2
File: homepage.html
````

## 4. Pricing - quotes
From 0-pricing.html, create pricing.html.

Replace static quotes by dynamic loading:

* URL: https://smileschool-api.hbtn.info/quotes
* No static quotes should be present in the quotes section
* During the Ajax request, a loader should be present
* Carousel should work like before

Same as the homepage.html

##### Repo:
````
GitHub repository: holberton-smiling-school_v2
File: pricing.html
````

## 5. Courses
From 0-courses.html, create courses.html.

Replace static video card by dynamic loading:

* URL: https://smileschool-api.hbtn.info/courses
* GET parameters:
   1. q: search value (in our case, the value of the field KEYWORDS)
   2. topic: topic filter value (in our case, the value of the field TOPICS)
   3. sort: order of all courses (in our case, the value of the field SORT BY)
* No static video cards should be present in the section
* During the Ajax request, a loader should be present
* Dropdowns are dynamic (coming from the API):
   1. Topic: list of topics
   2. Sort by: list of sorts
* Search value should be initialized by the value q in the API response
* The list of video cards is coming from courses in the API response
* API request must be done when:
   1. Search value is changing
   2. A new Topic is selected
   3. A new Sort by is selected

![alt text](https://github.com/breebrowder/holberton-smiling-school_v2/blob/main/readme_assets/courses-loader.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school_v2
File: courses.html
````

## About the Developer  💬

### Bree Browder

Bree is known for her creativity, organization, and self awareness. Advances in technology have played an integral part in her life. As an empathy-driven problem solver, Bree wants to be at the forefront of design for products, and to continuously design with others in mind, especially those who tend to be marginalized or forgotten.

### Follow Me

- 📁 [LinkedIn](https://www.linkedin.com/in/breebrowder/)
- ✍️ [Medium](https://medium.com/@breebrowder)
- 🖥️ [Portfolio Website](https://breebrowder.github.io)

### Email Me
📩: browder.bree@gmail.com

#### Please Note: Some links may be internal and inaccessible to the general public outside of Holberton School students.
