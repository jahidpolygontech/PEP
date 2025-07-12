# PEP Project Documentation

## 📋 Table of Contents
- [App Directory Structure](#app-directory-structure)
- [Layouts & Pages](#layouts--pages)
- [Shared UI Components](#shared-ui-components)
- [How to Add New Pages](#how-to-add-new-pages)
- [Component Usage](#component-usage)

## App Directory Structure


## Layouts & Pages
### Center Layout (without-sidebar)
- Path: `src/app/(center-layout)/<page-name>/page.tsx`
- Automatically includes Navbar + Footer

### Sidebar Layout
- Path: `src/app/(sidebar)/<page-name>/page.tsx`
- Automatically includes Sidebar + Navbar + Footer

## Shared UI Components
### Available Components:
- Buttons (PrimaryButton)
- Checkbox (CheckBox)
- Inputs (TextField, PasswordField)
- FAQ Item (FaqItem)
- Footer (Footer, FooterColumn)
- Navigation (Navbar, SidebarNavbar)
- Sidebar (Sidebar, Sidebaritem)

## How to Add New Pages
1. **For Center Layout**:
   ```tsx
   // src/app/(center-layout)/profile/page.tsx
   export default function ProfilePage() {
     return (
       <div className="max-w-4xl mx-auto p-6">
         <h1>Your Profile</h1>
       </div>
     );
   }

2. **For Sidebar Layout**:

   ```tsx
// src/app/(sidebar)/settings/page.tsx
export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1>Settings</h1>
    </div>
  );
}

   

   
