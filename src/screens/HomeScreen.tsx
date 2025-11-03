import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>🗣️</Text>
        <Text style={styles.heroTitle}>User-Specific Translator</Text>
        <Text style={styles.heroSubtitle}>
          Translate audio in real-time with voice cloning
        </Text>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Features</Text>

        <View style={styles.grid}>
          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🎤</Text>
            <Text style={styles.featureTitle}>Speech Recognition</Text>
            <Text style={styles.featureDescription}>
              Transcribe audio in 90+ languages using Whisper
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🌍</Text>
            <Text style={styles.featureTitle}>Translation</Text>
            <Text style={styles.featureDescription}>
              Translate between 200+ languages with NLLB-200
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🗣️</Text>
            <Text style={styles.featureTitle}>Voice Cloning</Text>
            <Text style={styles.featureDescription}>
              Synthesize speech preserving speaker's voice
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureEmoji}>🎭</Text>
            <Text style={styles.featureTitle}>Accent Library</Text>
            <Text style={styles.featureDescription}>
              Save and reuse custom voice profiles
            </Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Translator')}>
          <Text style={styles.actionEmoji}>🌍</Text>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Start Translating</Text>
            <Text style={styles.actionDescription}>
              Record and translate audio
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('AccentLibrary')}>
          <Text style={styles.actionEmoji}>🎭</Text>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Manage Accents</Text>
            <Text style={styles.actionDescription}>
              View and organize voice profiles
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.actionEmoji}>⚙️</Text>
          <View style={styles.actionTextContainer}>
            <Text style={styles.actionTitle}>Settings</Text>
            <Text style={styles.actionDescription}>
              Configure app preferences
            </Text>
          </View>
          <Text style={styles.actionArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>90+</Text>
          <Text style={styles.statLabel}>Languages</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>200+</Text>
          <Text style={styles.statLabel}>Translations</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>AI</Text>
          <Text style={styles.statLabel}>Powered</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made with ❤️ for seamless multilingual communication
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
  hero: {
    backgroundColor: '#0ea5e9',
    padding: 40,
    alignItems: 'center',
  },
  heroEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
    textAlign: 'center',
  },
  featuresContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
  },
  actionsContainer: {
    padding: 20,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionEmoji: {
    fontSize: 32,
    marginRight: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  actionDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  actionArrow: {
    fontSize: 32,
    color: '#0ea5e9',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});

export default HomeScreen;

