# include <iostream>

void sumOfThreeAndFiveMultiples(int max);

int main()
{
  sumOfThreeAndFiveMultiples(1000);
  return 0;
}

void sumOfThreeAndFiveMultiples(int max)
{
  int sum = 0;
  for (int nIndex = 1; nIndex <= max; nIndex++)
  {
    if (nIndex % 3 != 0 && nIndex % 5 != 0)
    {
      continue;
    }
    std::cout << nIndex << std::endl;
    sum += nIndex;
  }
  std::cout << "The sum is: " << sum << std::endl;
}

