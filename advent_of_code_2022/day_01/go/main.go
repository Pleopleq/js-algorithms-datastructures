package main

import (
	"bufio"
	"fmt"
	"os"
)

func dayOne() {
	input, err := os.Open("./smallInput.txt")

	if err != nil {
		fmt.Println(err)
	}
	defer input.Close()

	bufInput := bufio.NewScanner(input)

	for bufInput.Scan() {
		fmt.Println(bufInput.Text())
	}

}

func main() {
	dayOne()
}
