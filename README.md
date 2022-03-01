# Holberton School Curriculum: 0x01. Implement a design with bootstrap

In this project, you will implement 3 web pages with Bootstrap. You will use all HTML/CSS/Accessibility/Responsive design/Bootstrap knowledges that you learned previously.

You won’t have a lot of instruction, you are free to implement it the way that you want - the objective is simple: Have fully functional web pages that look the same as the designer file.

**Here the final result on both desktop and mobile versions:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/intro.jpg)


##### This webpage has been designed by Nicolas Philippot, UI/UX designer.

### Requirements

* You have to use Bootstrap
* Your **styles.css** must be as small as you can - you must use as much as you can Bootstrap classes

### Imports

#### For this project, you will need: fonts from Google, JQuery, Bootstrap CSS/JS

Check the [project page](https://intranet.hbtn.io/projects/1687) for imports.

# TASKS
## 0. Read and be familiar with Figma
Create an account in [Figma](https://www.figma.com/) and open these files:

* [Homepage](https://www.figma.com/file/QYQqMYbdpAHL5xTclwJKSI/Homepage?node-id=0%3A1)
* [Pricing](https://www.figma.com/file/KLAI53jdYpfFNEy0O79ymB/Pricing)
* [Courses](https://www.figma.com/file/ivg3abH1HLmMayBgjGg1Qf/Courses)

And “Duplicate to your Drafts” to have access to all design details.

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/Read_and_be_familiar.png)

#### Important notes with Figma:

* if your computer doesn’t have missing fonts, you can find them here: [source-sans-pro](https://www.fontsquirrel.com/fonts/source-sans-pro) and [Spin-Cycle-OT](https://www.fontsquirrel.com/fonts/Spin-Cycle-OT)
* some values are in float - feel free to round them
* “Be pixel perfect” - yes! but mainly make sure colors, size and position are correct. #C271FF is not purple.

For this task, please write an amazing **README.md**

#### Interactions note:

* Web pages must switch to the tablet version when the screen width is 768px
* Web pages must switch to the mobile version when the screen width is 576px
* button hover/active: **opacity: 0.9**

##### Repo:
````
GitHub repository: holberton-smiling-school
File: README.md
````

## 1. Header first
Let’s start by the Homepage: **create the header/hero piece**

**Desktop:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/Header_first.png)

**Mobile:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/Header_first_gif.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 0-homepage.html, styles.css
````

## 2. Carousel of quotes
**Create the section “Carousel of quotes”**

By using a Carousel component of Bootstrap, create this Carousel of quotes.

You can have for the moment one quote or twice the same for testing (like example below)

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/carousel_of_quotes.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 1-homepage.html, styles.css
````

## 3. Popular videos
**Create the section “Most popular tutorials”**

By using a Carousel component of Bootstrap, create this Carousel of video cards.

**Reminder:**

* Desktop: 4 cards
* Tablet: 2 cards
* Mobile: 1 card

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/popular_videos.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 2-homepage.html, styles.css
````

## 4. Row of smiles
**Create the section “Free membership”**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/row_of_smiles.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 3-homepage.html, styles.css
````

## 5. Latest videos
**Create the section “Latest videos”**

Copy the block “Most popular tutorials” to “Latest videos”

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 4-homepage.html, styles.css
````

## 6. ... and the footer!
**Create the footer**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/footer.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: homepage.html, styles.css
````

## 7. Pricing - header
Now, let’s do the pricing page: **create the header/hero piece**

The mobile version must be the same as the Homepage - it’s time to reuse code!

**Desktop:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/pricing_header.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 0-pricing.html, styles.css
````

## 8. Prices grid
**Create the prices grid**

**Desktop:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/prices_grid.png)

**Mobile:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/prices_grid_mobile.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 1-pricing.html, styles.css
````

## 9. Quotes section
Same as the Homepage, **create the Carousel of quotes**

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 2-pricing.html, styles.css
````

## 10. FAQ
**Create the FAQ grid**

**Desktop:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/pricing_faq.png)

**Mobile:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/pricing_faq_mobile.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 3-pricing.html, styles.css
````

## 11. Close the page with a footer
Same as Homepage, **create the footer**

##### Repo:
````
GitHub repository: holberton-smiling-school
File: pricing.html, styles.css
````

## 12. Courses - header
Now, let’s do the courses page: **create the header/hero piece**

The mobile version must be the same as the Homepage - it’s time to reuse code!

**Desktop:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/courses_header.png)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 0-courses.html, styles.css
````

## 13. Search filters
**Create the search filters section**

Dropdown is a nice way to create filters.

For the selected/placeholder value of both dropdown, no need to have dynamic value - static content is totally ok.

**Desktop:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/courses_search_filters.gif)

**Tablet/Mobile:**

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/courses_search_filters_mobile.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 1-courses.html, styles.css
````

## 14. List of result
**Create the result section of courses**

You can reuse the same cell for testing. Don’t forget to test with odd and even number of cells.

![alt text](https://github.com/breezybrow/holberton-smiling-school/blob/main/readme_assets/list_of_result_mobile.gif)

##### Repo:
````
GitHub repository: holberton-smiling-school
File: 2-courses.html, styles.css
````

## 15. Close the page with a footer
Same as Homepage and Pricing page, **create the footer**

##### Repo:
````
GitHub repository: holberton-smiling-school
File: courses.html, styles.css
````

### Contributors

1. Bree Browder - 2372@holbertonschool.com

```
Project Due Date: September 21, 2021
```

#### Please Note: Some links may be internal and inaccessible to the general public outside of Holberton School students.
