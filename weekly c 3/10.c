// Write a C program to reverse a number entered by the user.

#include <stdio.h>
main() 
{
  int n,rev=0,rem;

  printf("Enter an integer:");
  scanf("%d",&n);

  while (n!= 0) 
  {
    rem = n%10;
    rev = rev*10+rem;
    n /= 10;
  }

  printf("Reversed number = %d", rev);

}