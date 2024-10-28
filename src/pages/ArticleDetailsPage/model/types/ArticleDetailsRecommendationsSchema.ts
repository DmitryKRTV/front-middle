import { Article } from '@/entities/Article';
import { EntityId, EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article, EntityId> {
    isLoading?: boolean;
    error?: string;
}
