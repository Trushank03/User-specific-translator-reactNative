import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const AccentLibraryScreen = () => {
  const [accents, setAccents] = useState([
    {
      id: 1,
      name: 'Professional Voice',
      language: 'English',
      duration: '5s',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Spanish Accent',
      language: 'Spanish',
      duration: '8s',
      date: '2024-01-14',
    },
    {
      id: 3,
      name: 'French Voice',
      language: 'French',
      duration: '6s',
      date: '2024-01-13',
    },
  ]);

  const handlePlay = (accent: any) => {
    Alert.alert('Playing', `Playing ${accent.name}...`);
  };

  const handleDelete = (id: number) => {
    Alert.alert(
      'Delete Accent',
      'Are you sure you want to delete this accent?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setAccents(accents.filter(accent => accent.id !== id));
            Alert.alert('Deleted', 'Accent removed from library');
          },
        },
      ],
    );
  };

  const handleAddNew = () => {
    Alert.alert('Add Accent', 'Record a new voice sample');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>Your Voice Library</Text>
          <Text style={styles.headerSubtitle}>
            Manage your saved accent profiles
          </Text>
        </View>
        <View style={styles.headerStats}>
          <Text style={styles.statNumber}>{accents.length}</Text>
          <Text style={styles.statLabel}>Accents</Text>
        </View>
      </View>

      {/* Add New Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
        <Text style={styles.addButtonIcon}>+</Text>
        <Text style={styles.addButtonText}>Add New Accent</Text>
      </TouchableOpacity>

      {/* Accents List */}
      <View style={styles.accentsContainer}>
        <Text style={styles.sectionTitle}>Saved Accents</Text>

        {accents.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🎭</Text>
            <Text style={styles.emptyTitle}>No accents saved yet</Text>
            <Text style={styles.emptyText}>
              Record your first voice sample to get started
            </Text>
          </View>
        ) : (
          accents.map(accent => (
            <View key={accent.id} style={styles.accentCard}>
              <View style={styles.accentIcon}>
                <Text style={styles.accentIconText}>🎭</Text>
              </View>

              <View style={styles.accentInfo}>
                <Text style={styles.accentName}>{accent.name}</Text>
                <Text style={styles.accentDetails}>
                  {accent.language} • {accent.duration} • {accent.date}
                </Text>
              </View>

              <View style={styles.accentActions}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handlePlay(accent)}>
                  <Text style={styles.actionIcon}>▶️</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleDelete(accent.id)}>
                  <Text style={styles.actionIcon}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>📚 What is Accent Library?</Text>
        <Text style={styles.infoText}>
          Save voice samples to use for translation. The system will clone your
          voice and apply it to translated audio, making it sound more natural
          and personal.
        </Text>
        <View style={styles.infoTips}>
          <Text style={styles.infoTipTitle}>Tips for best results:</Text>
          <Text style={styles.infoTip}>
            • Record 5-10 seconds of clear speech
          </Text>
          <Text style={styles.infoTip}>
            • Use a quiet environment
          </Text>
          <Text style={styles.infoTip}>• Speak naturally and clearly</Text>
          <Text style={styles.infoTip}>
            • Record in the same language as the accent
          </Text>
        </View>
      </View>

      {/* Usage Guide */}
      <View style={styles.guideContainer}>
        <Text style={styles.guideTitle}>How to Use</Text>

        <View style={styles.guideStep}>
          <View style={styles.guideStepNumber}>
            <Text style={styles.guideStepNumberText}>1</Text>
          </View>
          <View style={styles.guideStepContent}>
            <Text style={styles.guideStepTitle}>Record Sample</Text>
            <Text style={styles.guideStepText}>
              Tap "Add New Accent" and record a voice sample
            </Text>
          </View>
        </View>

        <View style={styles.guideStep}>
          <View style={styles.guideStepNumber}>
            <Text style={styles.guideStepNumberText}>2</Text>
          </View>
          <View style={styles.guideStepContent}>
            <Text style={styles.guideStepTitle}>Name Your Accent</Text>
            <Text style={styles.guideStepText}>
              Give it a descriptive name for easy identification
            </Text>
          </View>
        </View>

        <View style={styles.guideStep}>
          <View style={styles.guideStepNumber}>
            <Text style={styles.guideStepNumberText}>3</Text>
          </View>
          <View style={styles.guideStepContent}>
            <Text style={styles.guideStepTitle}>Use in Translation</Text>
            <Text style={styles.guideStepText}>
              Select the accent when translating to clone your voice
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#0ea5e9',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInfo: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
  },
  headerStats: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    minWidth: 80,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.9,
  },
  addButton: {
    backgroundColor: '#10b981',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonIcon: {
    fontSize: 24,
    color: '#ffffff',
    marginRight: 8,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  accentsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  accentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  accentIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  accentIconText: {
    fontSize: 24,
  },
  accentInfo: {
    flex: 1,
  },
  accentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  accentDetails: {
    fontSize: 12,
    color: '#6b7280',
  },
  accentActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 16,
  },
  emptyState: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#e0f2fe',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0ea5e9',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0c4a6e',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#075985',
    lineHeight: 20,
    marginBottom: 12,
  },
  infoTips: {
    marginTop: 8,
  },
  infoTipTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0c4a6e',
    marginBottom: 4,
  },
  infoTip: {
    fontSize: 12,
    color: '#075985',
    marginBottom: 2,
  },
  guideContainer: {
    margin: 16,
    marginTop: 0,
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  guideStep: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  guideStepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  guideStepNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  guideStepContent: {
    flex: 1,
  },
  guideStepTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  guideStepText: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
  },
});

export default AccentLibraryScreen;

