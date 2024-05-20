// 5. **Question 5: Pass/Fail**
//    Design a C program that takes a student's marks as input and prints "Pass" if the marks are greater than or equal to 40; otherwise, print "Fail."

#include<stdio.h>
main()
{
    int a;

    printf("Enter Your Marks :");
    scanf("%d",&a);

    if (a < 40)
    {
        printf("Sorry You Have can't Passed This Exam..");
    }
    else{
        printf("Congratulations You Have Passed This Exam..");
    }
    
}