// 2. **Question 2: Odd or Even**
//    Create a C program to check whether a given integer is odd or even.

#include<stdio.h>

main()
{
    int a;

    printf("Enter Number :");
    scanf("%d",&a);

    if (a % 2 == 0)
    {
        printf("This is Even... %d",a);
    }
    else{
        printf("This is Odd.. %d",a);
    }
}