import sys
from os import listdir

def importImages():
	inputDirectory = sys.argv[1]
	outputFile = 'index.js'
	if len(sys.argv) == 3:
		outputFile = sys.argv[2]

	finalFileStr = ''

	allFiles = listdir(inputDirectory)
	allFiles = sorted(allFiles)
	fileCount = len(listdir(inputDirectory))
	count = 0

	for file in allFiles:
		finalFileStr += 'import Image' + str(count) + ' from \'./' + file + '\'';
		finalFileStr += '\n'
		count += 1

	finalFileStr += '\nexport const imageSequence = [\n'

	count = 0
	for count in range(fileCount):
		finalFileStr += '	Image' + str(count) +  ',';
		finalFileStr += '\n'

	finalFileStr += '];'

	#print finalFileStr
	f = open(outputFile, "w")

	f.write(finalFileStr)
	f.close()

importImages()