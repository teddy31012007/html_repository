# **Answers**

1)#include <stdio.h>

\#include <stdlib.h>



int main() {

&nbsp;   int \*arr = (int \*)malloc(5 \* sizeof(int)); // Allocate memory

&nbsp;   if (arr == NULL) {

&nbsp;       printf("Memory allocation failed\\n");

&nbsp;       return 1;

&nbsp;   }

&nbsp;   for (int i = 0; i < 5; i++) {

&nbsp;       arr\[i] = i \* 2;

&nbsp;   }

&nbsp;   for (int i = 0; i < 5; i++) {

&nbsp;       printf("%d ", arr\[i]);

&nbsp;   }

&nbsp;   free(arr); // Always free memory

&nbsp;   return 0;

}



2)#include <stdio.h>



int factorial(int n) {

&nbsp;   if (n == 0)

&nbsp;       return 1;

&nbsp;   else

&nbsp;       return n \* factorial(n - 1); // Recursive call with (n - 1)

}



int main() {

&nbsp;   int n = 5;

&nbsp;   printf("Factorial: %d\\n", factorial(n));

&nbsp;   return 0;

}



3)#include <stdio.h>



int main() {

&nbsp;   FILE \*fp;

&nbsp;   fp = fopen("data.txt", "r");

&nbsp;   if (fp == NULL) {

&nbsp;       printf("File not found\\n");

&nbsp;       return 1;

&nbsp;   }

&nbsp;   char ch;

&nbsp;   while ((ch = fgetc(fp)) != EOF) { // Safer reading method

&nbsp;       putchar(ch);

&nbsp;   }

&nbsp;   fclose(fp);

&nbsp;   return 0;

}



4)#include <stdio.h>

\#include <stdlib.h>



struct Node {

&nbsp;   int data;

&nbsp;   struct Node\* next;

};



void insert(struct Node\*\* head, int val) {

&nbsp;   struct Node\* newNode = (struct Node\*)malloc(sizeof(struct Node));

&nbsp;   newNode->data = val;

&nbsp;   newNode->next = \*head;

&nbsp;   \*head = newNode;

}



void print(struct Node\* head) {

&nbsp;   while (head != NULL) {

&nbsp;       printf("%d -> ", head->data);

&nbsp;       head = head->next;

&nbsp;   }

}



int main() {

&nbsp;   struct Node\* head = NULL;

&nbsp;   insert(\&head, 10);

&nbsp;   insert(\&head, 20);

&nbsp;   insert(\&head, 30);

&nbsp;   print(head);

&nbsp;   return 0;

}



5)#include <stdio.h>



int main() {

&nbsp;   char str\[] = "hello";

&nbsp;   char \*ptr = str;

&nbsp;   printf("%c\\n", \*(ptr + 1)); // Moves to next character, prints 'e'

&nbsp;   return 0;

}



