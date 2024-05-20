// Write a C program to swap two numbers entered by the user without using a third variable.

#include<stdio.h>
main()
{
    int a,b;

    printf("\nEnter a:");
    scanf("%d",&a);
    
    printf("\nEnter b:");
    scanf("%d",&b);

    a=a+b;
    b=a-b;
    a=a-b;

    printf("\na=%d",a);
    printf("\nb=%d",b);
}