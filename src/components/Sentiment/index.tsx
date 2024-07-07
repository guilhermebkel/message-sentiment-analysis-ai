import { View, Text } from "react-native"

import { MeaningCloudSentimentScore } from "../../protocols/meaning-cloud"

import { meaningCloudSentimentScoreToSentimentResult } from "../../utils/sentiment"

import { styles } from "./styles"

type HomeProps = {
  score: MeaningCloudSentimentScore
}

export default function Home(props: HomeProps) {
  const sentimentResult = meaningCloudSentimentScoreToSentimentResult[props.score]

  return (
    <View style={styles.container}>
			<Text style={styles.emoji}>
        {sentimentResult.emoji}
			</Text>

      <Text style={styles.sentiment}>
        {sentimentResult.message}
			</Text>
    </View>
  )
}
