# Copilot Search - Groups Filter Prototype

A fully interactive prototype of Microsoft Copilot Search interface with enhanced **Groups** filter functionality. This demonstrates how users can search and filter across mixed content types including Teams conversations, documents, and emails.

## 🎯 Key Features

### Mixed Content Types
- **Teams Conversations**: Real chat messages and channel discussions
- **Word Documents**: Meeting notes, technical documentation, reports
- **Excel Spreadsheets**: Analytics, roadmaps, data tracking
- **PowerPoint Presentations**: Project updates, analysis, awards
- **Email Messages**: Communication threads and updates

### Advanced Filtering
- **Real-time Search**: Results update as you type
- **Modified Date Filter**: Filter by recency (today, yesterday, week, month, year)
- **Content Type Filter**: Filter by Word, Excel, PowerPoint, PDF, Email, Teams
- **Person Filter**: Search for content by specific authors
- **Knowledge Sources**: Select between All Results, SharePoint, or Groups
- **Groups Multi-Select**: When "Groups" is selected, choose specific groups with checkboxes

### Interactive Features
- **Pagination**: Navigate through 100+ results (20 per page)
- **Hover Actions**: Open, Share, More actions on file hover
- **Responsive Design**: Works on desktop and mobile
- **Sort Options**: Sort by relevance, date modified, or name

### Existing Filters (Replicated from Copilot Search)
1. **Modified Date**: Filter by when content was last modified
   - Anytime, Today, Yesterday, Past week, Past month, Past year

2. **Result Type**: Filter by document/content type
   - All, Word, Excel, PowerPoint, PDF, Webpage, Email

3. **Person**: Search for content by specific people
   - Type-ahead search with suggested people

4. **Knowledge Sources**: Filter by data sources
   - SharePoint, OneDrive, Outlook, Teams, Azure DevOps

### New Groups Filter 🆕
The main enhancement to the existing Copilot Search interface:

#### Groups Filter Options:
1. **"All groups I'm a member of"** (Default)
   - Shows content from all groups the user belongs to
   - Includes results from Trading Agreements, Analysts Groups, Marketing Team, Product Managers, Finance Committee

2. **"Specific group"**
   - Dropdown/search interface to select a particular group
   - Available groups:
     - Trading Agreements
     - Analysts Groups  
     - Marketing Team
     - Product Managers
     - Finance Committee

#### Knowledge Sources Enhancement:
- Added **"Groups"** as a new knowledge source option
- When selected, shows content specifically from group workspaces
- Marked with "NEW" badge to highlight the feature

## Mock Data

The prototype includes realistic mock data:

### Sample Groups:
- **Trading Agreements** (24 members)
- **Analysts Groups** (18 members)
- **Marketing Team** (32 members)
- **Product Managers** (15 members)
- **Finance Committee** (12 members)

### Sample Content:
- Group charters and documents
- Meeting notes and reports
- Team discussions from Teams
- Collaborative documents
- Strategic planning materials

## How to Use

1. **Open the prototype**: Open `index.html` in a web browser
2. **Search**: Type "group" or any other term in the search bar
3. **Apply filters**: Use the sidebar filters to refine results
4. **Try the Groups filter**:
   - Select "Specific group" under the Groups filter
   - Choose a group from the dropdown (e.g., "Trading Agreements")
   - See how results are filtered to that specific group
5. **Test Knowledge Sources**: Check "Groups" under Knowledge Sources to see group-specific content

## Technical Implementation

### Technologies Used:
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: Interactive functionality
- **Font Awesome**: Icons for better UX

### Key Features:
- **Responsive Design**: Works on desktop and mobile
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Performance**: Debounced search to prevent excessive filtering
- **State Management**: Tracks filter state and updates UI accordingly

### File Structure:
```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Design Considerations

### Visual Design:
- **Microsoft Fluent Design**: Follows Microsoft's design language
- **Consistent Colors**: Uses Microsoft brand colors (#0078d4)
- **Clear Hierarchy**: Well-organized layout with proper spacing
- **Visual Feedback**: Hover states and transitions

### User Experience:
- **Familiar Interface**: Matches existing Copilot Search patterns
- **Clear Labels**: "NEW" badges highlight new functionality
- **Progressive Disclosure**: Group selector only shows when needed
- **Filter Management**: Easy to add/remove filters with visual tags

### Functionality:
- **Real-time Updates**: Search and filter results update immediately
- **Smart Defaults**: Sensible default selections
- **Error Handling**: Graceful handling of no results
- **Filter Persistence**: Maintains filter state during session

## Future Enhancements

Potential improvements for a production version:

1. **Integration with Microsoft Graph API** for real group data
2. **Advanced group search** with autocomplete
3. **Group hierarchy support** (nested groups, parent/child relationships)
4. **Permission-based filtering** (only show groups user can access)
5. **Recent groups** shortcuts for frequently accessed groups
6. **Group metadata display** (member count, description, etc.)
7. **Bulk operations** on group content
8. **Group-specific search scopes** and saved searches

## Demo Instructions

To see the Groups filter in action:

1. Open the prototype in your browser
2. Note the search results for "group"
3. In the left sidebar, locate the "Groups" filter with the "NEW" badge
4. Select "Specific group" radio button
5. Click in the group search box to see available groups
6. Select "Trading Agreements" or "Analysts Groups"
7. Observe how the results filter to show only content from that group
8. Also try checking "Groups" under "Knowledge sources" to see group-specific content

The prototype demonstrates how this new feature would integrate seamlessly into the existing Copilot Search experience while providing powerful new filtering capabilities for group-based content discovery.
