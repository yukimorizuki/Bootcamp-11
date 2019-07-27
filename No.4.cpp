#include <stdio.h>
#include <string.h>

int print_if_match(char *str, char *key)

{
  char  *pCh;
  int   found=0;
  pCh = strpbrk (str, key);
  while (pCh != NULL)
  {
    printf ("%c " , *pCh);
    pCh = strpbrk (pCh+1,key);
    found++;
  }
  return found;
}

int main ()
{
  char str[100];
  char key_vocal[] = "aeiou";
  char key_konsonan[] = "bcdfghjklmnpqrstvwxyz";
  char key_symbol[]= "`~!@#$%^&*()-_=+[{]}\\|'\";:/?.>,<";
  int count_vocal = 0;
  int count_konsonan = 0;
  int count_symbol = 0;


  printf ("%s","Masukkan Kalimat: ");
  scanf("%[^\n]",str);


  printf("%s","Huruf Vokal: ");
  count_vocal=print_if_match(str,key_vocal);
  printf(",Jumlah Huruf Vokal: %d\n",count_vocal);


  printf("%s","Huruf Konsonan: ");
  count_konsonan=print_if_match(str,key_konsonan);
  printf(",Jumlah Huruf Vokal: %d\n",count_konsonan);

  printf("%s","Huruf Symbol: ");
  count_symbol=print_if_match(str,key_symbol);
  printf(",Jumlah Huruf Symbol: %d\n",count_symbol);

  printf ("\n");
  return 0;
}