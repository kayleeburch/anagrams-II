# Don't forget to run the tests (and create some of your own)

def anagrams_for(word, list_of_words):
	result = []
	word_sorted_list = sorting_words(list(word))
	for words in list_of_words:
		if sorting_words(list(words)) == word_sorted_list:
			result.append(words)	
	
	return result

def sorting_words(x):
	return sorted(x)

#create test cases to test for whitespace
def remove_whitespace(x):
	return filter(lambda char: char == ' ', x)