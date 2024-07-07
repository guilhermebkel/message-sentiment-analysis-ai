export type MeaningCloudSentimentScore = "P+" | "P" | "NEU" | "N" | "N+" | "NONE"

export type AnalyseTextSentimentApiResult = {
	confidence: number
	score_tag: MeaningCloudSentimentScore
}
