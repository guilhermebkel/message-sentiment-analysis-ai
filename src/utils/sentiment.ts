import { MeaningCloudSentimentScore } from "../protocols/meaning-cloud"
import { SentimentResult } from "../protocols/sentiment"

export const meaningCloudSentimentScoreToSentimentResult: Record<MeaningCloudSentimentScore, SentimentResult> = {
	"P+": {
		emoji: "😁",
		message: "Muito positivo"
	},
	"P": {
		emoji: "😀",
		message: "Positivo"
	},
	"NEU": {
		emoji: "😐️",
		message: "Neutro"
	},
	"N": {
		emoji: "😕",
		message: "Negativo"
	},
	"N+": {
		emoji: "😢",
		message: "Muito negativo"
	},
	"NONE": {
		emoji: "🧐",
		message: "Sem polaridade"
	}
}