// .Write a C program to find the largest among three numbers entered by the user.


#include<stdio.h>
main()
{
    int a,b,c;

    printf("\nEnter a:");
    scanf("%d",&a);
    
    printf("\nEnter b:");
    scanf("%d",&b);

    printf("\nEnter c:");
    scanf("%d",&c);

    if(a>b)
    {
       if(a>c)
       {
        printf("\n%d is largest",a);
       }
       else
       printf("\n%d is largest",c);
    }
    
    else if(b>c)
    {
        printf("\n%d is largest",b);
    }
    else
    printf("\n%d is largest",c);
}