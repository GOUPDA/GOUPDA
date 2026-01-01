
import React, { useState } from 'react';

interface AdminPanelProps {
  content: any;
  setContent: (content: any) => void;
  onClose: () => void;
}

const STORAGE_KEY = 'goupda_brand_content';

const AdminPanel: React.FC<AdminPanelProps> = ({ content, setContent, onClose }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (path: string, value: string) => {
    const keys = path.split('.');
    const newContent = JSON.parse(JSON.stringify(content));
    let temp = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (temp[key] === undefined) return; // Guard
      temp = temp[key];
    }
    
    const lastKey = keys[keys.length - 1];
    temp[lastKey] = value;
    setContent(newContent);
  };

  const handleSave = () => {
    setIsSaving(true);
    // Persist to LocalStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    
    // Simulate a brief loading for UX feedback
    setTimeout(() => {
      setIsSaving(false);
      onClose();
    }, 800);
  };

  const ImageInput = ({ label, value, path }: { label: string, value: string, path: string }) => (
    <div className="space-y-3 p-4 bg-stone-50 border border-stone-100 rounded-sm">
      <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block">{label}</label>
      <div className="flex gap-4 items-start">
        {value !== 'none' && value.startsWith('http') ? (
          <img src={value} className="w-20 h-20 object-cover border border-stone-200 shadow-sm" alt="preview" />
        ) : (
          <div className="w-20 h-20 bg-stone-200 flex items-center justify-center text-[10px] text-stone-400 text-center px-2">No Image</div>
        )}
        <div className="flex-1 space-y-2">
          <input 
            type="text" 
            value={value} 
            placeholder="Paste Image URL here..."
            onChange={(e) => handleChange(path, e.target.value)}
            className="w-full border-b border-stone-300 py-1.5 text-xs focus:outline-none focus:border-stone-900 transition-colors font-light bg-transparent"
          />
          <p className="text-[9px] text-stone-400 italic">Enter 'none' to use default CSS object if applicable</p>
        </div>
      </div>
    </div>
  );

  const TextInput = ({ label, value, path, textarea = false }: { label: string, value: string, path: string, textarea?: boolean }) => (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-stone-400 block">{label}</label>
      {textarea ? (
        <textarea 
          rows={3}
          value={value} 
          onChange={(e) => handleChange(path, e.target.value)}
          className="w-full border-b border-stone-100 py-2 text-sm focus:outline-none focus:border-stone-900 transition-colors font-light resize-none bg-transparent"
        />
      ) : (
        <input 
          type="text" 
          value={value} 
          onChange={(e) => handleChange(path, e.target.value)}
          className="w-full border-b border-stone-100 py-2 text-sm focus:outline-none focus:border-stone-900 transition-colors font-light bg-transparent"
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-xl h-full bg-white shadow-2xl p-8 md:p-12 overflow-y-auto">
        <div className="flex justify-between items-start mb-16">
          <div className="space-y-2">
             <span className="text-[10px] bg-stone-900 text-white px-2 py-0.5 tracking-[0.2em] uppercase">Admin Mode</span>
             <h2 className="text-3xl font-light serif tracking-widest">VISUAL STUDIO</h2>
             <p className="text-[10px] text-stone-400 tracking-widest uppercase italic">Design the brand experience</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-50 rounded-full transition-colors group">
            <svg className="w-6 h-6 text-stone-300 group-hover:text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-20 pb-32">
          {/* Global Branding */}
          <section className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-900 border-b border-stone-100 pb-2">Global Branding</h3>
            <TextInput label="Brand Name (Logo)" value={content.global.brandName} path="global.brandName" />
          </section>

          {/* Hero Section */}
          <section className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-900 border-b border-stone-100 pb-2">Hero Visual</h3>
            <ImageInput label="Hero Background Image" value={content.hero.image} path="hero.image" />
          </section>

          {/* Philosophy Section */}
          <section className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-900 border-b border-stone-100 pb-2">Philosophy Story</h3>
            <TextInput label="Title" value={content.philosophy.title} path="philosophy.title" />
            <TextInput label="Description" value={content.philosophy.desc} path="philosophy.desc" textarea />
          </section>

          {/* Categories Images */}
          <section className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-900 border-b border-stone-100 pb-2">Category Imagery</h3>
            {content.categories.map((cat: any, idx: number) => (
              <div key={cat.id} className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[9px] text-stone-400 uppercase tracking-widest font-bold">Slot {idx + 1}</span>
                </div>
                <ImageInput label={`${cat.name} Image`} value={cat.img} path={`categories.${idx}.img`} />
                <TextInput label="Category Name" value={cat.name} path={`categories.${idx}.name`} />
              </div>
            ))}
          </section>

          {/* Campaign Images */}
          <section className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-stone-900 border-b border-stone-100 pb-2">Campaign Visuals</h3>
            {content.campaigns.map((camp: any, idx: number) => (
              <div key={idx} className="space-y-4">
                <ImageInput label="Main Campaign Image" value={camp.image} path={`campaigns.${idx}.image`} />
                <TextInput label="Campaign Title" value={camp.title} path={`campaigns.${idx}.title`} />
                <TextInput label="Campaign Body" value={camp.description} path={`campaigns.${idx}.description`} textarea />
              </div>
            ))}
          </section>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-white via-white to-white/0 pointer-events-none">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`pointer-events-auto w-full max-w-md mx-auto block bg-stone-900 text-white text-[10px] uppercase tracking-[0.4em] py-5 shadow-2xl transition-all active:scale-[0.98] ${isSaving ? 'opacity-70 cursor-wait' : 'hover:bg-stone-800'}`}
          >
            {isSaving ? 'Saving to Database...' : 'Publish & Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
