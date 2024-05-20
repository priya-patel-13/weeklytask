// 4. **Question 4: Leap Year Check**
//    Write a C program to check if a given year is a leap year or not.

#include<stdio.h>

main()
{
    int a;

    printf("Enter Year :");
    scanf("%d",&a);

    if (a % 4 == 0)
    {
        printf("This is Leap Year... %d",a);
    }
    else{
        printf("This is Not Leap Year.. %d",a);
    }
}