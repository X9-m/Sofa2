# Contributing Guide

## Code of Conduct

- Be respectful and inclusive
- Report security issues privately
- Follow coding standards
- Write clear commit messages

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Sofa2.git`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make changes and commit: `git commit -am 'Add feature'`
5. Push to branch: `git push origin feature/your-feature`
6. Submit pull request

## Development Workflow

### Setup

```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Before Committing

```bash
# Backend
cd backend
npm run lint
npm test

# Frontend
cd frontend
npm run lint
npm test
```

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Code style changes
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Test additions/changes
- **chore**: Build/dependency changes
- **security**: Security fixes

### Examples

```
feat(auth): add two-factor authentication

Implement TOTP-based 2FA for enhanced security.

Breaking change: Users now required to set up 2FA
```

```
fix(products): correct price calculation

Fixed discount price calculation in cart total.

Closes #123
```

## Pull Request Guidelines

1. **Title**: Clear and descriptive
2. **Description**: Explain changes and why
3. **Tests**: Include tests for new features
4. **Documentation**: Update docs if needed
5. **Screenshots**: Include for UI changes

### PR Template

```markdown
## Description

Briefly describe your changes.

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

How to test your changes.

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Coding Standards

### Backend (Node.js/TypeScript)

- Use TypeScript for type safety
- Follow PascalCase for classes
- Use camelCase for functions/variables
- Max line length: 100 characters
- Use async/await over callbacks
- Add error handling

```typescript
// Good
async function getUserById(id: string): Promise<User> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) throw new Error('User not found');
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
```

### Frontend (React/TypeScript)

- Use functional components
- Use hooks for state management
- Export component as default
- Add PropTypes or TypeScript interfaces
- Use semantic HTML

```typescript
// Good
interface ProductProps {
  id: string;
  name: string;
  price: number;
  onAddToCart: (id: string) => void;
}

export default function Product({
  id,
  name,
  price,
  onAddToCart,
}: ProductProps) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
}
```

## Testing

### Backend Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test auth.test.ts

# Watch mode
npm test --watch
```

### Frontend Tests

```bash
# Run all tests
npm test

# Watch mode
npm test --watch

# Coverage
npm test --coverage
```

## Security

- Never commit secrets or API keys
- Report security issues privately
- Keep dependencies updated
- Follow OWASP guidelines
- Validate all user inputs

## Documentation

- Update README for new features
- Add JSDoc comments for functions
- Include examples for complex features
- Keep API documentation current

## Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create git tag
4. Push tag to repository
5. Create GitHub release

## Questions?

Open an issue or contact maintainers.

---

**Thank you for contributing!** 🎉
