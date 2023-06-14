package golangKatas

func Alternate(n int, firstValue string, secondValue string) []string {
	alternateValues := make([]string, 0)

	for i := 1; i <= n; i++ {
		if i%2 == 0 {
			alternateValues = append(alternateValues, secondValue)
		} else {
			alternateValues = append(alternateValues, firstValue)
		}
	}

	return alternateValues
}
