# include <iostream>

void sumOfMultiples(int naMultiples[], int max);
bool isAMultipleOf(int naMultiples, int nNum);

int main()
{
  int naMultiples[2] = {3, 5};
  sumOfMultiples(naMultiples, 1000);
  return 0;
}

void sumOfMultiples(int naMultiples[], int max)
{
  int sum = 0;
  for (int nIndex = 1; nIndex <= max; nIndex++)
  {
    if (nIndex % 3 != 0 && nIndex % 5 != 0)
    {
      continue;
    }
    sum += nIndex;
  }
  std::cout << "The sum is: " << sum << std::endl;
}

bool isAMultipleOf(int naMultiples[], int nNum)
{
  int sum = 0;
  int max = (sizeof(naMultiples)/sizeof(*naMultiples));

  for (int nIndex = 1; nIndex <= max; nIndex++)
  {
    if (nNum % naMultiples[nIndex] == 0)
    {
      return true;
    }
  }

  return false;
}

