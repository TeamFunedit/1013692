# YouTube Clone - Backend Integration Contracts

## Current Implementation Status
- ✅ Frontend-only implementation with mock data
- ✅ Complete UI/UX matching YouTube design
- ✅ Search, filtering, and navigation functionality
- ✅ Video player interface with comments

## Mock Data Currently Used (in mockData.js)

### Videos Collection
```javascript
{
  id: string,
  title: string,
  thumbnail: string (URL),
  channel: string,
  channelAvatar: string (URL),
  views: string,
  uploadTime: string,
  duration: string,
  description: string,
  likes: string,
  dislikes: string,
  subscribers: string
}
```

### Comments Collection
```javascript
{
  id: string,
  user: string,
  avatar: string (URL),
  comment: string,
  likes: number,
  timestamp: string
}
```

## API Contracts for Backend Implementation

### 1. Video Management APIs

#### GET /api/videos
- **Purpose**: Fetch all videos with pagination
- **Query Params**: 
  - `page`: number (default: 1)
  - `limit`: number (default: 20)
  - `category`: string (optional)
  - `search`: string (optional)
- **Response**: Array of video objects with metadata

#### GET /api/videos/:id
- **Purpose**: Fetch single video details
- **Response**: Complete video object with enhanced details

#### POST /api/videos
- **Purpose**: Upload new video (future feature)
- **Body**: Video metadata + file upload
- **Response**: Created video object

### 2. Search & Filter APIs

#### GET /api/videos/search
- **Purpose**: Search videos by title, description, channel
- **Query Params**: 
  - `q`: string (search query)
  - `page`: number
  - `limit`: number
- **Response**: Filtered video array

#### GET /api/categories
- **Purpose**: Fetch available categories
- **Response**: Array of category names

### 3. Comment System APIs

#### GET /api/videos/:id/comments
- **Purpose**: Fetch comments for a video
- **Query Params**: 
  - `page`: number
  - `limit`: number
- **Response**: Array of comment objects

#### POST /api/videos/:id/comments
- **Purpose**: Add new comment
- **Body**: `{ comment: string }`
- **Response**: Created comment object

#### PUT /api/comments/:id/like
- **Purpose**: Like/unlike a comment
- **Response**: Updated like count

### 4. Channel Management APIs

#### GET /api/channels/:id
- **Purpose**: Fetch channel information
- **Response**: Channel object with subscriber count, videos

#### POST /api/channels/:id/subscribe
- **Purpose**: Subscribe/unsubscribe to channel
- **Response**: Updated subscription status

### 5. User Interaction APIs

#### POST /api/videos/:id/like
- **Purpose**: Like/dislike a video
- **Body**: `{ action: 'like' | 'dislike' | 'remove' }`
- **Response**: Updated like/dislike counts

#### GET /api/videos/history
- **Purpose**: Fetch user's watch history
- **Response**: Array of watched videos

#### POST /api/videos/:id/view
- **Purpose**: Record video view
- **Response**: Updated view count

## Database Schema Requirements

### Videos Table/Collection
```sql
- id (Primary Key)
- title (Text, indexed)
- description (Text)
- thumbnail_url (Text)
- video_url (Text)
- duration (Integer - seconds)
- channel_id (Foreign Key)
- category_id (Foreign Key)
- view_count (Integer, default: 0)
- like_count (Integer, default: 0)
- dislike_count (Integer, default: 0)
- created_at (Timestamp)
- updated_at (Timestamp)
```

### Channels Table/Collection
```sql
- id (Primary Key)
- name (Text)
- avatar_url (Text)
- subscriber_count (Integer, default: 0)
- description (Text)
- created_at (Timestamp)
```

### Comments Table/Collection
```sql
- id (Primary Key)
- video_id (Foreign Key)
- user_name (Text)
- user_avatar (Text)
- comment_text (Text)
- like_count (Integer, default: 0)
- created_at (Timestamp)
```

### Categories Table/Collection
```sql
- id (Primary Key)
- name (Text, unique)
- created_at (Timestamp)
```

## Frontend-Backend Integration Points

### 1. Replace Mock Data Imports
- Remove imports from `mockData.js`
- Replace with API calls using axios/fetch

### 2. State Management Updates
- Add loading states for API calls
- Implement error handling for failed requests
- Add pagination logic for video lists

### 3. Real-time Features (Future)
- WebSocket integration for live comments
- Real-time view count updates
- Live streaming capability

### 4. Authentication Integration (Future)
- User login/logout functionality
- Protected routes for user-specific features
- JWT token management

## Implementation Priority

1. **Phase 1**: Basic video CRUD and search
2. **Phase 2**: Comment system and user interactions
3. **Phase 3**: Channel management and subscriptions
4. **Phase 4**: User authentication and personalization
5. **Phase 5**: Real-time features and video upload

## Notes
- Current frontend uses mock data that closely resembles YouTube's structure
- All UI interactions are functional and ready for backend integration
- Search and filter logic is implemented client-side but can be moved to backend
- Video player currently shows thumbnails but can be enhanced with actual video playback