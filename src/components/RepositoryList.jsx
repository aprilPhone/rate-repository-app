import React from "react";
import {View, Text} from "react-native";
import repositories from "../data/repositories";

const RepositoryList = () => {
    return (
        <View>
            {repositories.map(repo => (
                <View key={repo.id}>
                    <Text>id: {repo.id}</Text>
                    <Text>fullName: {repo.fullName}</Text>
                    <Text>description: {repo.description}</Text>
                    <Text>language: {repo.language}</Text>
                    <Text>stargazersCount: {repo.stargazersCount}</Text>
                    <Text>forksCount: {repo.forksCount}</Text>
                    <Text>reviewCount: {repo.reviewCount}</Text>
                    <Text>ratingAverage: {repo.ratingAverage}</Text>
                </View>
            ))}
        </View>
    )
}

export default RepositoryList;