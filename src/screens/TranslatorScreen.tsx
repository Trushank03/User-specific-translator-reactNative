import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

const TranslatorScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [sourceLanguage, setSourceLanguage] = useState('English');
  const [targetLanguage, setTargetLanguage] = useState('Spanish');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Hindi',
    'Russian',
  ];

  const handleRecordPress = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording start
      Alert.alert('Recording Started', 'Speak now...');
      setTimeout(() => {
        setIsRecording(false);
        setTranscription('Hello, how are you doing today?');
        setTranslation('Hola, ¿cómo estás hoy?');
      }, 2000);
    }
  };

  const handleTranslate = () => {
    Alert.alert('Translating', 'Processing your audio...');
    setTimeout(() => {
      setTranscription('This is a sample transcription');
      setTranslation('Esta es una transcripción de muestra');
    }, 1000);
  };

  const handlePlayback = () => {
    Alert.alert('Playing', 'Playing translated audio...');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Language Selection */}
      <View style={styles.languageContainer}>
        <View style={styles.languageCard}>
          <Text style={styles.languageLabel}>Source Language</Text>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => Alert.alert('Language Selector', 'Select source language')}>
            <Text style={styles.languageText}>{sourceLanguage}</Text>
            <Text style={styles.arrow}>▼</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.swapContainer}>
          <TouchableOpacity
            style={styles.swapButton}
            onPress={() => {
              const temp = sourceLanguage;
              setSourceLanguage(targetLanguage);
              setTargetLanguage(temp);
            }}>
            <Text style={styles.swapIcon}>⇄</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.languageCard}>
          <Text style={styles.languageLabel}>Target Language</Text>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => Alert.alert('Language Selector', 'Select target language')}>
            <Text style={styles.languageText}>{targetLanguage}</Text>
            <Text style={styles.arrow}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recording Section */}
      <View style={styles.recordingContainer}>
        <Text style={styles.sectionTitle}>Record Audio</Text>

        <View style={styles.recordingCard}>
          <TouchableOpacity
            style={[
              styles.recordButton,
              isRecording && styles.recordButtonActive,
            ]}
            onPress={handleRecordPress}>
            <Text style={styles.recordButtonIcon}>
              {isRecording ? '⏸️' : '🎤'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.recordingText}>
            {isRecording
              ? 'Recording... Tap to stop'
              : 'Tap microphone to start recording'}
          </Text>

          {isRecording && (
            <View style={styles.waveformContainer}>
              <View style={[styles.waveBar, {height: 20}]} />
              <View style={[styles.waveBar, {height: 40}]} />
              <View style={[styles.waveBar, {height: 30}]} />
              <View style={[styles.waveBar, {height: 50}]} />
              <View style={[styles.waveBar, {height: 35}]} />
              <View style={[styles.waveBar, {height: 45}]} />
            </View>
          )}
        </View>
      </View>

      {/* Transcription Result */}
      {transcription && (
        <View style={styles.resultContainer}>
          <Text style={styles.sectionTitle}>Transcription</Text>
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Original ({sourceLanguage})</Text>
            <Text style={styles.resultText}>{transcription}</Text>
            <View style={styles.resultActions}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => Alert.alert('Copy', 'Copied to clipboard')}>
                <Text style={styles.iconButtonText}>📋 Copy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => Alert.alert('Play', 'Playing original audio')}>
                <Text style={styles.iconButtonText}>▶️ Play</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* Translation Result */}
      {translation && (
        <View style={styles.resultContainer}>
          <Text style={styles.sectionTitle}>Translation</Text>
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>
              Translated ({targetLanguage})
            </Text>
            <Text style={styles.resultText}>{translation}</Text>
            <View style={styles.resultActions}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => Alert.alert('Copy', 'Copied to clipboard')}>
                <Text style={styles.iconButtonText}>📋 Copy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handlePlayback}>
                <Text style={styles.iconButtonText}>▶️ Play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => Alert.alert('Download', 'Downloading audio')}>
                <Text style={styles.iconButtonText}>💾 Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleTranslate}>
          <Text style={styles.primaryButtonText}>🌍 Translate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => {
            setTranscription('');
            setTranslation('');
            Alert.alert('Cleared', 'All data cleared');
          }}>
          <Text style={styles.secondaryButtonText}>🗑️ Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>💡 Tips for Best Results</Text>
        <Text style={styles.tipText}>
          • Speak clearly and at a moderate pace
        </Text>
        <Text style={styles.tipText}>
          • Record in a quiet environment
        </Text>
        <Text style={styles.tipText}>
          • Keep recordings under 30 seconds
        </Text>
        <Text style={styles.tipText}>
          • Use the accent library for better voice cloning
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  languageContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    alignItems: 'center',
  },
  languageCard: {
    flex: 1,
  },
  languageLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  languageButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  arrow: {
    fontSize: 12,
    color: '#6b7280',
  },
  swapContainer: {
    marginTop: 16,
  },
  swapButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapIcon: {
    fontSize: 20,
    color: '#ffffff',
  },
  recordingContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  recordingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recordButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  recordButtonActive: {
    backgroundColor: '#ef4444',
  },
  recordButtonIcon: {
    fontSize: 40,
  },
  recordingText: {
    marginTop: 16,
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  waveformContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 4,
    alignItems: 'flex-end',
  },
  waveBar: {
    width: 4,
    backgroundColor: '#0ea5e9',
    borderRadius: 2,
  },
  resultContainer: {
    padding: 16,
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0ea5e9',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 16,
    color: '#1f2937',
    lineHeight: 24,
    marginBottom: 12,
  },
  resultActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
  },
  iconButtonText: {
    fontSize: 12,
    color: '#1f2937',
    textAlign: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  primaryButton: {
    flex: 2,
    backgroundColor: '#0ea5e9',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  tipsContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 12,
    color: '#78350f',
    marginBottom: 4,
  },
});

export default TranslatorScreen;

