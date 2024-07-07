import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native"
import { useState } from "react"
import { FontAwesome } from "@expo/vector-icons"

import { styles } from "./styles"

import Sentiment from "../../components/Sentiment"

import { MeaningCloudSentimentScore } from "../../protocols/meaning-cloud"

import { analyseTextSentiment } from "../../services/meaning-cloud"

export default function Home() {
	const [message, setMessage] = useState<string>("")
	const [score, setScore] = useState<MeaningCloudSentimentScore | null>(null)
	const [loading, setLoading] = useState<boolean>(false)

	const handleAnalyseMessageSentiment = async () => {
		try {
			setLoading(true)

			const result = await analyseTextSentiment(message)

			setScore(result.score_tag)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

  return (
    <View style={styles.container}>
			<Text style={styles.title}>
				Message
			</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Type a message..."
					multiline
					onChangeText={text => setMessage(text)}
				/>

				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.7}
					disabled={loading}
					onPress={handleAnalyseMessageSentiment}
				>
					{loading ? (
						<ActivityIndicator
							color="#FFFFFF"
						/>
					) : (
						<FontAwesome
							name="send"
							size={24}
							color="#FFFFFF"
						/>
					)}
				</TouchableOpacity>
			</View>

			{score && <Sentiment score={score} />}
    </View>
  )
}
