import { Article, ArticleView } from '@/entities/Article/model/types/article';
import { EntityId, EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article, EntityId> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}
