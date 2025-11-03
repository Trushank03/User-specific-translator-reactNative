import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';

const SettingsScreen = () => {
  const [audioEnhancement, setAudioEnhancement] = useState(true);
  const [autoTranslate, setAutoTranslate] = useState(false);
  const [saveHistory, setSaveHistory] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>👤</Text>
        </View>
        <Text style={styles.profileName}>User Account</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => Alert.alert('Edit Profile', 'Coming soon')}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Translation Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Translation Settings</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Audio Enhancement</Text>
            <Text style={styles.settingDescription}>
              Improve audio quality before processing
            </Text>
          </View>
          <Switch
            value={audioEnhancement}
            onValueChange={setAudioEnhancement}
            trackColor={{false: '#d1d5db', true: '#7dd3fc'}}
            thumbColor={audioEnhancement ? '#0ea5e9' : '#f3f4f6'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Auto-Translate</Text>
            <Text style={styles.settingDescription}>
              Automatically translate after recording
            </Text>
          </View>
          <Switch
            value={autoTranslate}
            onValueChange={setAutoTranslate}
            trackColor={{false: '#d1d5db', true: '#7dd3fc'}}
            thumbColor={autoTranslate ? '#0ea5e9' : '#f3f4f6'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Save History</Text>
            <Text style={styles.settingDescription}>
              Keep translation history on device
            </Text>
          </View>
          <Switch
            value={saveHistory}
            onValueChange={setSaveHistory}
            trackColor={{false: '#d1d5db', true: '#7dd3fc'}}
            thumbColor={saveHistory ? '#0ea5e9' : '#f3f4f6'}
          />
        </View>
      </View>

      {/* App Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Language', 'Select app language')}>
          <Text style={styles.menuIcon}>🌍</Text>
          <View style={styles.menuInfo}>
            <Text style={styles.menuLabel}>App Language</Text>
            <Text style={styles.menuValue}>English</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Theme', 'Select app theme')}>
          <Text style={styles.menuIcon}>🎨</Text>
          <View style={styles.menuInfo}>
            <Text style={styles.menuLabel}>Theme</Text>
            <Text style={styles.menuValue}>Light</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>🔔</Text>
          <View style={styles.menuInfo}>
            <Text style={styles.menuLabel}>Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{false: '#d1d5db', true: '#7dd3fc'}}
            thumbColor={notifications ? '#0ea5e9' : '#f3f4f6'}
          />
        </View>
      </View>

      {/* Storage */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage</Text>

        <View style={styles.storageCard}>
          <View style={styles.storageInfo}>
            <Text style={styles.storageLabel}>Audio Files</Text>
            <Text style={styles.storageValue}>125 MB</Text>
          </View>
          <View style={styles.storageBar}>
            <View style={[styles.storageProgress, {width: '35%'}]} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.dangerButton}
          onPress={() =>
            Alert.alert(
              'Clear Cache',
              'Are you sure you want to clear all cached data?',
              [
                {text: 'Cancel', style: 'cancel'},
                {
                  text: 'Clear',
                  style: 'destructive',
                  onPress: () => Alert.alert('Cleared', 'Cache cleared successfully'),
                },
              ],
            )
          }>
          <Text style={styles.dangerButtonText}>🗑️ Clear Cache</Text>
        </TouchableOpacity>
      </View>

      {/* Support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support & Info</Text>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Help', 'Help center coming soon')}>
          <Text style={styles.menuIcon}>❓</Text>
          <Text style={styles.menuLabel}>Help Center</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Privacy', 'Privacy policy')}>
          <Text style={styles.menuIcon}>🔒</Text>
          <Text style={styles.menuLabel}>Privacy Policy</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('Terms', 'Terms of service')}>
          <Text style={styles.menuIcon}>📄</Text>
          <Text style={styles.menuLabel}>Terms of Service</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => Alert.alert('About', 'User Translator v1.0.0')}>
          <Text style={styles.menuIcon}>ℹ️</Text>
          <Text style={styles.menuLabel}>About</Text>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() =>
          Alert.alert('Logout', 'Are you sure you want to logout?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Logout', style: 'destructive'},
          ])
        }>
        <Text style={styles.logoutButtonText}>🚪 Logout</Text>
      </TouchableOpacity>

      {/* Version */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
        <Text style={styles.versionText}>© 2024 User Translator</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  profileSection: {
    backgroundColor: '#0ea5e9',
    padding: 32,
    alignItems: 'center',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileAvatarText: {
    fontSize: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  settingItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  settingInfo: {
    flex: 1,
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  menuInfo: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  menuValue: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 24,
    color: '#9ca3af',
  },
  storageCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  storageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  storageLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  storageValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  storageBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  storageProgress: {
    height: '100%',
    backgroundColor: '#0ea5e9',
  },
  dangerButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  dangerButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ef4444',
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  versionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 4,
  },
});

export default SettingsScreen;

