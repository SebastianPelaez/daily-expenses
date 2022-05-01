import React from "react";
import {View, Text, SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import Header from '../components/header';

export default function home(){

    const styles = StyleSheet.create({
        AndroidSafeArea: {
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }
    });

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Header/>
        </SafeAreaView>        
    );
    
}