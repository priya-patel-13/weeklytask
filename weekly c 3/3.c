// Write a C program to find the factorial of a number entered by the user.

#include<stdio.h>
main()
{
    int a,fact=1;

    printf("\nEnter a:");
    scanf("%d",&a);

    for (int i = a; i >= 1; i--)
    {
        fact *=i;
    }

    printf("The factorial number=%d",fact);
    
}