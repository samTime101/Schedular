## Scheduler

A simple web app , ( may turn it into an API ) That shows my college schedule.


### Preview
[http://samipregmi.ct.ws/schedule/](http://samipregmi.ct.ws/schedule/)

Table : class_schedule
```sql
CREATE TABLE IF NOT EXISTS class_schedule (
    Day VARCHAR(50),
    Time VARCHAR(50),
    Class_Type VARCHAR(50),
    Module_Code VARCHAR(50),
    Module_Title VARCHAR(100),
    Lecturer VARCHAR(100),
    Group_Name VARCHAR(50),
    Room VARCHAR(50)
);
```

### TODO
- [x] Add schedule data in MySql
- [x] Connect php to mySql
- [x] Make it look better
- [x] Demo client side code done
- [x] Correctly refreshes the data
