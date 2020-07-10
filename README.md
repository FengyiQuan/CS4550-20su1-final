# CS4550-20su1-final
# [Jobigger](https://jobigger-react2.herokuapp.com/)
# Team: Fengyi Quan, Ruochen Zhuang
## [Google Document Link](https://docs.google.com/document/d/1KFIONIMVNue0Vp0JVMilHfNbEsssDyMHjZ9Dn8Nkr8Y/edit)


# Problem 
- During the co-op or post-graduate job search process, the only available information is limited 
like job description or location. Such a description is not sufficient for job seekers to determine 
the value of the job. Instead, companies’ detailed information and first hand experience should be 
provided.
- Employees can’t get in touch with fellow colleagues through a platform like NUcareer

# Strategy
- We are planning to build a web platform for these job seekers. Workers can write reviews on the 
company they worked with. To get a better understanding and knowledge about a company, job seekers 
can see the reviews from peers. It allows companies to post positions on our website. 
- And job seekers can view all positions from different companies and make applications through our 
website. They can keep track of applications they made and interviews they received to see the 
process.

- It also allows users to make organizations. For example, one company can form its own organization
 of workers. And these organizations are public to all users. Job seekers can see the workers who 
 have been working there to make a better judge to accept or reject the positions. 

# Web API you intend to use: Jobs api for extracting jobs available
- [Adzuna](https://developer.adzuna.com/docs/search) (actual use)
- [Github Jobs](https://jobs.github.com/api)
- [Linkedin People Search](https://developer.linkedin.com/documents/people-search-api)
- [Indeed API](https://rapidapi.com/indeed/api/indeed)

# UML
![Jobigger UML](./Jobigger%20UML.png)


# Functionality
- Search Jobs (Home Page): all users can search jobs by keywords, they can view all jobs by provide 
empty string as keyword.

- Job Detail: all users can look for job detail by clicking `blue arrow` button on the right in job 
list page.

- Profile: Every login user have profile information, he can view by clicking `Login as ...` on the
top right of the home search page. 

- Write review: every login user can write review for jobs. Once goes into job detail page, there is
a yellow `Write Reveiw` button to open textarea. 

- Edit/delete Reviews: job seekers and employees can only edit and delete reviews written by 
themselves. If a review is written by current login user, there will be two `pencil` and `trash` 
button to edit and delete selected review.

- Looking for other profile: users can see other users profile. When they looking for reviews, they 
can see all other users reviews on this job. It will goes into others' profile by clicking their 
username shown on top of each review. They can only see username, wish list and dob. They can not 
see password and email for that user.

# Different Users
## Visitor
- They can see generic content including searching job, job detail, others' review. 


## Job Seeker
### Demo user(username/password): alice/alice
- Wish List: every job seeker have his own wish list. When he enter job list page (search result 
page), he can add job to wish list by clicking red heard button on the right.


## Employee
### Demo user(username/password): bob/bob
- They have all functions of job seekers instead wish list. 

## Admin
### Demo user(username/password): admin/admin
- Edit/delete Reviews: they have access to edit and delete all users reviews. Once they goes into 
detail page, there are pencil and cross button on each of the review for that particular job. They
can edit it by clicking them.

# Domain Objects
We are trying to represent the relationship between jobs, different people and reviews. 
- Each job has `jobId`, `jobName` and corresponding `reviews`. `jobId` is same as Adzuna api jobId (id).
- Profile has `username`, `password`, `role`, `email`, `dob`. `Role` is one of 
`VISITOR, EMPLOYEE, JOB_SEEKER, ADMIN`.
- Review has `reviewId`, `job` that review for, `profile` that indicate who writes this review. 

# Link
- `/` home
- `/login` login page
- `/register` register page
- `/profile` profile page (do not try to access to `/profile` without login)
- `/PROTOTYPE` wiki page
- `/:layout/jobs` jobs list (should not try access directly)
- `/detail/:id` job detail page
