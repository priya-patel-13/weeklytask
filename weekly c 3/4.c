// Write a C program to check if a number entered by the user is even or odd.

#include<stdio.h>
main()
{
    int a;

    printf("\nEnter a:");
    scanf("%d",&a);

    if(a%2==0)
    {
        printf("\n%d is even",a);
    }
    else
    printf("\n%d is odd",a);
}