import React from 'react';
import { Container, Content, Grid, Card, CategoryTitle, TagList, Tag } from './styles';
import { FormattedMessage } from 'react-intl';

const skillGroups = [
  {
    titleId: 'skills.group.languages',
    tags: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React', 'Next.js', 'Vue3', 'React Native', 'Electron', 'Sails.js'],
  },
  {
    titleId: 'skills.group.databases',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    titleId: 'skills.group.apis',
    tags: ['RESTful APIs', 'GraphQL', 'JWT Authentication'],
  },
  {
    titleId: 'skills.group.cloud',
    tags: ['AWS Lambda', 'AWS S3', 'GitHub Actions', 'GitLab CI/CD'],
  },
  {
    titleId: 'skills.group.frontend',
    tags: ['HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Styled Components', 'Redux'],
  },
  {
    titleId: 'skills.group.testing',
    tags: ['TDD', 'Jest', 'Cypress', 'Vitest', 'React Testing Library'],
  },
  {
    titleId: 'skills.group.vcs',
    tags: ['Git', 'GitHub', 'GitLab', 'BitBucket'],
  },
  {
    titleId: 'skills.group.methodologies',
    tags: ['Agile', 'Scrum', 'Clean Code', 'Design Thinking'],
  },
  {
    titleId: 'skills.group.ai',
    tags: ['Cursor', 'Claude Code', 'GitHub Copilot', 'MCP', 'Sub-agents', 'Context management'],
  },
];

const Skills: React.FC = () => (
  <Container>
    <Content>
      <h5 id="skills">
        <FormattedMessage id="skills.title" />
      </h5>
      <h2 style={{ marginBottom: '48px' }}>
        <FormattedMessage id="skills.message" />
      </h2>
      <Grid>
        {skillGroups.map((group) => (
          <Card key={group.titleId} data-aos="fade-up">
            <CategoryTitle>
              <FormattedMessage id={group.titleId} />
            </CategoryTitle>
            <TagList>
              {group.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </Grid>
    </Content>
  </Container>
);

export default Skills;
