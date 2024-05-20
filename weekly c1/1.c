// 1. **Question 1: Positive or Negative**
//    Write a C program to input a number and determine whether it's positive, negative, or zero.

#include <stdio.h>
main()
{
    int a;

    printf("Enter Number :");
    scanf("%d", &a);

    if (a == 0)
    {
        printf("This is Zero... %d",a);
    }
    else if (a < 0)
    {
        printf("This is Nagative... %d",a);
    }
    else{
        printf("This is Positive... %d",a);
    }
}