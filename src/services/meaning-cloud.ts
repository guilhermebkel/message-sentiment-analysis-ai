import axios from "axios"

import { meaningCloudConfig } from "../config/meaning-cloud"

import { AnalyseTextSentimentApiResult } from "../protocols/meaning-cloud"

export const analyseTextSentiment = async (text: string): Promise<AnalyseTextSentimentApiResult> => {
	const formData = new FormData()
	formData.append("key", meaningCloudConfig.licenseKey)
	formData.append("txt", text)
	formData.append("lang", "pt")

	const response = await axios.post<AnalyseTextSentimentApiResult>(meaningCloudConfig.apiUrl, formData, {
		headers: {
			"Content-Type": "multipart/form-data"
		}
	})

	return response.data
}
