import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';
import { EntityId, EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article, EntityId> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
