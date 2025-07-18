// Clean, working version of the Copilot Search script
console.log('Loading Copilot Search script...');

// Teams conversation data based on your screenshots
const mockResults = [
    // Teams conversations
    {
        id: 1,
        title: "GetAgents API Implementation Discussion",
        description: "GetAgents API fails for any reason- Disabled (we don't want the user to be able to create agent, unless we know there's no agent for the group at present. This we get to know from getAgents api)...",
        type: "teams",
        icon: "fas fa-comments",
        source: "Groups",
        group: "Groups CoPilot Prototyping Sync Up",
        author: "Mohammad Nazim",
        modified: "16 Jul 2025 at 09:41 am",
        conversationType: "group"
    },
    {
        id: 2,
        title: "Copilot on Groups Knowledge - Customer Preview.pptx",
        description: "Comprehensive presentation on Copilot integration with Groups Knowledge for customer preview sessions. Includes architecture diagrams, use cases, and implementation roadmap.",
        type: "powerpoint",
        icon: "fas fa-file-powerpoint",
        source: "Groups",
        group: "Teams",
        author: "Rahul Nayak",
        modified: "11 Jul 2025 at 02:52 pm",
        size: "12.4 MB"
    },
    {
        id: 3,
        title: "Groups Knowledge Architecture.docx",
        description: "Technical documentation outlining the architecture for Groups Knowledge integration with Copilot agents, including data flow and security considerations.",
        type: "word",
        icon: "fas fa-file-word",
        source: "Groups",
        group: "Copilot on Groups Knowledge - Internal Microsoft Dogfooding",
        author: "Rahul Nayak",
        modified: "17 Jul 2025 at 12:42 pm",
        size: "3.2 MB"
    },
    {
        id: 4,
        title: "RE: Groups Copilot Agent Implementation",
        description: "Email thread discussing the implementation timeline for Groups Copilot agents, including feedback from stakeholders and next steps for development.",
        type: "email",
        icon: "fas fa-envelope",
        source: "Groups",
        group: "Teams",
        author: "Rahul Nayak",
        modified: "11 Jul 2025 at 03:16 pm",
        size: "N/A"
    },
    {
        id: 5,
        title: "Groups Usage Analytics Q3.xlsx",
        description: "Quarterly analytics report showing Groups usage patterns, adoption metrics, and performance indicators across different Microsoft 365 workloads.",
        type: "excel",
        icon: "fas fa-file-excel",
        source: "Groups",
        group: "Teams",
        author: "Rahul Nayak",
        modified: "10 Jul 2025 at 02:36 pm",
        size: "8.7 MB"
    },
    {
        id: 6,
        title: "Groups Knowledge Copilot Discussion",
        description: "Hi Vibhor Shanmuga. Ran into Rohit day before yesterday and we were chatting about the Groups Knowledge Copilot effort....",
        type: "teams",
        icon: "fas fa-comments",
        source: "Groups",
        group: "Teams",
        author: "Rahul Nayak",
        modified: "18 Jul 2025 at 10:59 am",
        conversationType: "channel"
    },
    {
        id: 7,
        title: "Execution Excellence Awards - Groups Copilot.pptx",
        description: "Presentation for Execution Excellence Awards highlighting the Groups Copilot project achievements, team contributions, and business impact.",
        type: "powerpoint",
        icon: "fas fa-file-powerpoint",
        source: "Groups",
        group: "Groups, AG EMs + Leads + PMs",
        author: "Arun Kumar",
        modified: "18 Jul 2025 at 10:36 am",
        size: "15.2 MB"
    },
    {
        id: 8,
        title: "Privacy Learning Sessions Notes.docx",
        description: "Comprehensive notes from privacy learning sessions covering data protection requirements, compliance guidelines, and best practices for Groups implementation.",
        type: "word",
        icon: "fas fa-file-word",
        source: "Groups",
        group: "IDC Privacy Champ - Learning Sessions",
        author: "Andrew David Bhagyam",
        modified: "18 Jul 2025 at 09:22 am",
        size: "2.8 MB"
    },
    {
        id: 9,
        title: "RE: Teams Messages Capability Fix",
        description: "Email update regarding the fix for Teams messages capability issue. Teams team has merged the PR and the fix is currently rolling out to production.",
        type: "email",
        icon: "fas fa-envelope",
        source: "Groups",
        group: "Groups CoPilot Prototyping Sync Up",
        author: "Mohammad Nazim",
        modified: "18 Jul 2025 at 09:14 am",
        size: "N/A"
    },
    {
        id: 10,
        title: "Groups Knowledge Roadmap.xlsx",
        description: "Detailed roadmap spreadsheet for Groups Knowledge initiatives, including timelines, dependencies, resource allocation, and milestone tracking.",
        type: "excel",
        icon: "fas fa-file-excel",
        source: "Groups",
        group: "You, Vibhor Agarwal,; Shanmuga Sundaram Mahendran, Niranjan Nayak",
        author: "Niranjan Nayak",
        modified: "18 Jul 2025 at 09:06 am",
        size: "4.5 MB"
    },
    {
        id: 11,
        title: "Intern Hiring Event Schedule.docx",
        description: "Schedule and logistics document for the intern hiring event, including interview panels, candidate information, and evaluation criteria.",
        type: "word",
        icon: "fas fa-file-word",
        source: "Groups",
        group: "Groups, AG EMs + Leads + PMs",
        author: "Vishal Mittal",
        modified: "18 Jul 2025 at 08:16 am",
        size: "1.9 MB"
    },
    {
        id: 12,
        title: "Plugin Enforcer Issues Analysis.pptx",
        description: "Technical analysis presentation covering Plugin Enforcer behavior issues, root cause analysis, and proposed solutions for Viva Engage Copilot integration.",
        type: "powerpoint",
        icon: "fas fa-file-powerpoint",
        source: "Groups",
        group: "Scenarios - Extensibility",
        author: "Seth Guan",
        modified: "18 Jul 2025 at 05:32 am",
        size: "9.3 MB"
    },
    {
        id: 13,
        title: "RE: BizChat Validation Hotfix",
        description: "Email thread regarding the hotfix deployed to WW for BizChat validation issues. Includes technical details and impact assessment.",
        type: "email",
        icon: "fas fa-envelope",
        source: "Groups",
        group: "Experiences - Validations",
        author: "Katrina Gonzales",
        modified: "18 Jul 2025 at 04:41 am",
        size: "N/A"
    }
];

// Add more diverse content types to reach 100 results
for (let i = 14; i <= 100; i++) {
    const authors = ["Alice Johnson", "Bob Smith", "Carol Davis", "Dan Wilson", "Eve Miller", "Frank Zhang", "Grace Liu", "Henry Brown", "Sarah Williams", "Mike Chen"];
    const groups = ["General Discussion", "Project Updates", "Technical Support", "Marketing Team", "Finance Group", "Engineering Team", "Product Management", "HR Department"];
    const types = ["word", "excel", "powerpoint", "email", "teams"];
    const sources = ["Groups", "SharePoint", "OneDrive"];
    
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const randomGroup = groups[Math.floor(Math.random() * groups.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    
    let title, description, icon, size;
    
    switch (randomType) {
        case "word":
            title = `${randomGroup} - Meeting Notes ${i}.docx`;
            description = `Meeting notes document from ${randomGroup} covering key discussion points, action items, and follow-up tasks for team collaboration.`;
            icon = "fas fa-file-word";
            size = `${(Math.random() * 5 + 1).toFixed(1)} MB`;
            break;
        case "excel":
            title = `${randomGroup} - Data Analysis ${i}.xlsx`;
            description = `Comprehensive data analysis spreadsheet for ${randomGroup} including metrics, charts, and performance indicators.`;
            icon = "fas fa-file-excel";
            size = `${(Math.random() * 10 + 2).toFixed(1)} MB`;
            break;
        case "powerpoint":
            title = `${randomGroup} - Presentation ${i}.pptx`;
            description = `Strategic presentation for ${randomGroup} outlining objectives, progress updates, and future roadmap initiatives.`;
            icon = "fas fa-file-powerpoint";
            size = `${(Math.random() * 15 + 5).toFixed(1)} MB`;
            break;
        case "email":
            title = `RE: ${randomGroup} Update`;
            description = `Email thread discussing ${randomGroup} progress, stakeholder feedback, and coordination of upcoming deliverables.`;
            icon = "fas fa-envelope";
            size = "N/A";
            break;
        case "teams":
            title = `${randomGroup} - Team Discussion`;
            description = `Discussion in ${randomGroup} about project coordination, technical challenges, and collaborative problem-solving approaches.`;
            icon = "fas fa-comments";
            size = "N/A";
            break;
    }

    mockResults.push({
        id: i,
        title: title,
        description: description,
        type: randomType,
        icon: icon,
        source: randomSource,
        group: randomGroup,
        author: randomAuthor,
        modified: `${Math.floor(Math.random() * 30) + 1} days ago`,
        size: size,
        conversationType: randomType === "teams" ? (Math.random() > 0.5 ? "group" : "channel") : undefined
    });
}

// Available groups for filtering
const userGroups = [
    { id: "groups-copilot", name: "Groups CoPilot Prototyping Sync Up", memberCount: 8 },
    { id: "teams-general", name: "Teams", memberCount: 24 },
    { id: "groups-knowledge", name: "Copilot on Groups Knowledge", memberCount: 12 },
    { id: "ag-ems", name: "Groups, AG EMs + Leads + PMs", memberCount: 15 },
    { id: "general", name: "General Discussion", memberCount: 32 }
];

class CopilotSearch {
    constructor() {
        console.log('Initializing CopilotSearch...');
        
        this.currentFilters = {
            modified: 'anytime',
            resultType: 'all',
            person: '',
            source: 'all',
            groups: 'all-groups',
            selectedGroups: []
        };
        
        this.pagination = {
            currentPage: 1,
            resultsPerPage: 20,
            totalResults: 0
        };
        
        this.initializeEventListeners();
        this.setupKnowledgeSources();
        this.setupGroupsFilter();
        this.performSearch();
        
        console.log('CopilotSearch initialized successfully');
    }

    initializeEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                this.debounce(() => this.performSearch(), 300)();
            });
        }

        const searchButton = document.getElementById('searchButton');
        if (searchButton) {
            searchButton.addEventListener('click', () => {
                this.performSearch();
            });
        }

        // Filter dropdowns
        this.setupFilterDropdowns();
        
        // Pagination
        this.setupPagination();
    }

    setupFilterDropdowns() {
        // Modified filter
        const modifiedButton = document.getElementById('modifiedButton');
        const modifiedDropdown = document.getElementById('modifiedDropdown');
        
        if (modifiedButton && modifiedDropdown) {
            modifiedButton.addEventListener('click', (e) => {
                e.stopPropagation();
                modifiedDropdown.classList.toggle('show');
            });

            modifiedDropdown.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-option')) {
                    this.currentFilters.modified = e.target.dataset.value;
                    this.pagination.currentPage = 1;
                    this.performSearch();
                    modifiedDropdown.classList.remove('show');
                }
            });
        }

        // Type filter  
        const typeButton = document.getElementById('typeButton');
        const typeDropdown = document.getElementById('typeDropdown');
        
        if (typeButton && typeDropdown) {
            typeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                typeDropdown.classList.toggle('show');
            });

            typeDropdown.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-option')) {
                    this.currentFilters.resultType = e.target.dataset.value;
                    this.pagination.currentPage = 1;
                    this.performSearch();
                    typeDropdown.classList.remove('show');
                }
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        });
    }

    setupKnowledgeSources() {
        const sourceOptions = document.querySelectorAll('.source-option');
        sourceOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                sourceOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                option.classList.add('active');
                
                // Update filter
                this.currentFilters.source = option.dataset.source;
                this.pagination.currentPage = 1;
                
                // Show/hide groups filter
                const groupsInlineOptions = document.getElementById('groupsInlineOptions');
                if (option.dataset.source === 'groups' && groupsInlineOptions) {
                    groupsInlineOptions.style.display = 'block';
                } else if (groupsInlineOptions) {
                    groupsInlineOptions.style.display = 'none';
                }
                
                this.performSearch();
            });
        });
    }

    setupGroupsFilter() {
        const groupsFilterRadios = document.querySelectorAll('input[name="groupsFilter"]');
        const specificGroupSelector = document.getElementById('specificGroupSelector');
        
        groupsFilterRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                this.currentFilters.groups = radio.value;
                
                if (radio.value === 'specific-group' && specificGroupSelector) {
                    specificGroupSelector.style.display = 'block';
                    this.renderGroupCheckboxes();
                } else if (specificGroupSelector) {
                    specificGroupSelector.style.display = 'none';
                    this.currentFilters.selectedGroups = [];
                }
                
                this.pagination.currentPage = 1;
                this.performSearch();
            });
        });
    }

    renderGroupCheckboxes() {
        const specificGroupSelector = document.getElementById('specificGroupSelector');
        if (!specificGroupSelector) return;

        const checkboxesHtml = userGroups.map(group => `
            <label class="group-checkbox-option">
                <input type="checkbox" name="selectedGroups" value="${group.id}">
                <span class="checkbox-custom"></span>
                <span>${group.name} (${group.memberCount} members)</span>
            </label>
        `).join('');

        specificGroupSelector.innerHTML = `
            <div class="group-checkboxes">
                <div class="group-select-all">
                    <label class="group-checkbox-option">
                        <input type="checkbox" id="selectAllGroups">
                        <span class="checkbox-custom"></span>
                        <span><strong>Select All</strong></span>
                    </label>
                </div>
                ${checkboxesHtml}
            </div>
        `;

        // Add event listeners to checkboxes
        const checkboxes = specificGroupSelector.querySelectorAll('input[name="selectedGroups"]');
        const selectAllCheckbox = specificGroupSelector.querySelector('#selectAllGroups');
        
        // Individual checkbox listeners
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.currentFilters.selectedGroups = Array.from(
                    document.querySelectorAll('input[name="selectedGroups"]:checked')
                ).map(cb => cb.value);
                
                // Update select all checkbox state
                selectAllCheckbox.checked = this.currentFilters.selectedGroups.length === userGroups.length;
                selectAllCheckbox.indeterminate = this.currentFilters.selectedGroups.length > 0 && this.currentFilters.selectedGroups.length < userGroups.length;
                
                this.pagination.currentPage = 1;
                this.performSearch();
            });
        });
        
        // Select all checkbox listener
        selectAllCheckbox.addEventListener('change', () => {
            const isChecked = selectAllCheckbox.checked;
            checkboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
            });
            
            this.currentFilters.selectedGroups = isChecked ? userGroups.map(g => g.id) : [];
            this.pagination.currentPage = 1;
            this.performSearch();
        });
    }

    setupPagination() {
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (this.pagination.currentPage > 1) {
                    this.pagination.currentPage--;
                    this.performSearch();
                }
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const totalPages = Math.ceil(this.pagination.totalResults / this.pagination.resultsPerPage);
                if (this.pagination.currentPage < totalPages) {
                    this.pagination.currentPage++;
                    this.performSearch();
                }
            });
        }
    }

    performSearch() {
        console.log('Performing search...');
        
        const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
        
        // Filter results
        let filteredResults = mockResults.filter(result => {
            // Text search
            const matchesSearch = !searchTerm || 
                result.title.toLowerCase().includes(searchTerm) ||
                result.description.toLowerCase().includes(searchTerm) ||
                result.group.toLowerCase().includes(searchTerm);

            // Result type filter
            const matchesType = this.currentFilters.resultType === 'all' ||
                result.type === this.currentFilters.resultType;

            // Source filter
            let matchesSource = true;
            if (this.currentFilters.source !== 'all') {
                if (this.currentFilters.source === 'groups') {
                    matchesSource = result.source === 'Groups';
                } else if (this.currentFilters.source === 'sharepoint') {
                    matchesSource = result.source === 'SharePoint';
                } else {
                    matchesSource = result.source.toLowerCase() === this.currentFilters.source;
                }
            }

            // Groups filter
            let matchesGroups = true;
            if (this.currentFilters.source === 'groups') {
                if (this.currentFilters.groups === 'specific-group' && this.currentFilters.selectedGroups.length > 0) {
                    matchesGroups = this.currentFilters.selectedGroups.some(groupId => {
                        const group = userGroups.find(g => g.id === groupId);
                        return group && result.group.toLowerCase().includes(group.name.toLowerCase());
                    });
                }
            }

            return matchesSearch && matchesType && matchesSource && matchesGroups;
        });

        // Update pagination
        this.pagination.totalResults = filteredResults.length;
        const totalPages = Math.ceil(this.pagination.totalResults / this.pagination.resultsPerPage);
        
        // Get paginated results
        const startIndex = (this.pagination.currentPage - 1) * this.pagination.resultsPerPage;
        const endIndex = startIndex + this.pagination.resultsPerPage;
        const paginatedResults = filteredResults.slice(startIndex, endIndex);
        
        // Render results
        this.renderResults(paginatedResults);
        this.updatePagination(totalPages);
        this.updateResultsCount(this.pagination.totalResults);
        
        console.log('Search completed:', paginatedResults.length, 'results shown');
    }

    renderResults(results) {
        const resultsList = document.getElementById('resultsList');
        if (!resultsList) {
            console.error('Results list element not found');
            return;
        }

        if (results.length === 0) {
            resultsList.innerHTML = `
                <div class="no-results" style="text-align: center; padding: 40px; color: #a19f9d;">
                    <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px;"></i>
                    <h3>No results found</h3>
                    <p>Try adjusting your search terms or filters</p>
                </div>
            `;
            return;
        }

        resultsList.innerHTML = results.map(result => {
            // Consistent layout for all result types including Teams
            return `
                <div class="result-item file-result">
                    <div class="result-icon ${result.type}">
                        <i class="${result.icon}"></i>
                    </div>
                    <div class="result-content">
                        <a href="#" class="result-title">${result.title}</a>
                        <div class="result-description">${result.description}</div>
                        <div class="result-meta">
                            <span><i class="fas fa-user"></i> ${result.author}</span>
                            <span><i class="fas fa-clock"></i> ${result.modified}</span>
                            <span><i class="fas fa-users"></i> ${result.group}</span>
                            <span><i class="fas fa-database"></i> ${result.source}</span>
                            ${result.size && result.size !== 'N/A' ? `<span><i class="fas fa-file"></i> ${result.size}</span>` : ''}
                            ${result.conversationType ? `<span><i class="fas fa-comments"></i> ${result.conversationType}</span>` : ''}
                        </div>
                    </div>
                    <div class="result-actions">
                        <button class="action-btn" title="Open">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                        <button class="action-btn" title="Share">
                            <i class="fas fa-share"></i>
                        </button>
                        <button class="action-btn" title="More">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    updatePagination(totalPages) {
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');
        const paginationInfo = document.getElementById('paginationInfo');
        
        if (prevButton) {
            prevButton.disabled = this.pagination.currentPage <= 1;
        }
        
        if (nextButton) {
            nextButton.disabled = this.pagination.currentPage >= totalPages;
        }
        
        if (paginationInfo) {
            paginationInfo.textContent = `Page ${this.pagination.currentPage} of ${totalPages}`;
        }
    }

    updateResultsCount(count) {
        const resultsCount = document.querySelector('.results-count');
        const searchTerm = document.getElementById('searchInput')?.value || 'group';
        if (resultsCount) {
            resultsCount.textContent = `About ${count} results for "${searchTerm}"`;
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing CopilotSearch...');
    try {
        window.copilotSearch = new CopilotSearch();
        console.log('CopilotSearch initialized successfully');
    } catch (error) {
        console.error('Error initializing CopilotSearch:', error);
    }
});

console.log('Copilot Search script loaded successfully');
