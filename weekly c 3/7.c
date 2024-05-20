// Write a C program to check if a year entered by the user is a leap year or not.

#include<stdio.h>
main()
{
    int a;

    printf("\nEnter a:");
    scanf("%d",&a);

    if(a%4==0)
    {
        printf("\n%d is leap year",a);
    }
    else
    printf("\n%d is not leap year",a);
}