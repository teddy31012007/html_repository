##### **🐞 Bug Program 1 – Pointer and Dynamic Memory (Segmentation Fault)**



**#include <stdio.h>**

**#include <stdlib.h>**



**int main() {**

    **int \*arr;**

    **for (int i = 0; i < 5; i++) {**

        **arr\[i] = i \* 2;**

    **}**

    **for (int i = 0; i < 5; i++) {**

        **printf("%d ", arr\[i]);**

    **}**

    **free(arr);**

    **return 0;**

**}**



##### **🐞 Bug Program 2 – Recursive Factorial (Stack Overflow)**



**#include <stdio.h>**



**int factorial(int n) {**

    **if (n == 0)**

        **return 1;**

    **else**

        **return n \* factorial(n);**

**}**



**int main() {**

    **int n = 5;**

    **printf("Factorial: %d\\n", factorial(n));**

    **return 0;**

**}**



##### **🐞 Bug Program 3 – File Handling (File Not Opening)**



**#include <stdio.h>**



**int main() {**

    **FILE \*fp;**

    **fp = fopen("data.txt", "r");**

    **char ch;**

    **while (!feof(fp)) {**

        **fscanf(fp, "%c", \&ch);**

        **printf("%c", ch);**

    **}**

    **fclose(fp);**

    **return 0;**

**}**



##### **🐞 Bug Program 4 – Linked List Insertion (Segmentation Fault)**



**#include <stdio.h>**

**#include <stdlib.h>**



**struct Node {**

    **int data;**

    **struct Node\* next;**

**};**



**void insert(struct Node\* head, int val) {**

    **struct Node\* newNode = (struct Node\*)malloc(sizeof(struct Node));**

    **newNode->data = val;**

    **newNode->next = head;**

    **head = newNode;**

**}**



**void print(struct Node\* head) {**

    **while (head != NULL) {**

        **printf("%d -> ", head->data);**

        **head = head->next;**

    **}**

**}**



**int main() {**

    **struct Node\* head = NULL;**

    **insert(head, 10);**

    **insert(head, 20);**

    **insert(head, 30);**

    **print(head);**

    **return 0;**

**}**



##### **🐞 Bug Program 5 – Pointer Arithmetic with Strings**



**#include <stdio.h>**



**int main() {**

    **char str\[] = "hello";**

    **char \*ptr = str;**

    **printf("%c\\n", \*ptr + 1);**

    **return 0;**

**}**

















