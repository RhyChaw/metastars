import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import styles from '../styles/SubmitBlog.module.css';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('General');
  const [isPublished, setIsPublished] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyMarkdown = (syntax) => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setContent((prev) => prev.replace(selectedText, `${syntax}${selectedText}${syntax}`));
    }
  };

  const handleSubmit = () => {
    const blogData = {
      title,
      image,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
      category,
      isPublished,
      createdAt: new Date().toISOString(),
    };
    console.log(blogData);
    // Send blogData to backend or Firebase
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Write a New Blog Post</h1>
      <Card className="mb-6">
        <CardContent className={styles.cardContent}>
          <div>
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter blog title" />
          </div>
          <div>
            <Label>Upload Cover Image</Label>
            <Input type="file" onChange={handleImageUpload} />
            {image && <img src={image} alt="preview" className={styles.imagePreview} />}
          </div>
          <div>
            <Label>Tags (comma-separated)</Label>
            <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="e.g. tech,react,personal" />
          </div>
          <div>
            <Label>Category</Label>
            <select className={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="General">General</option>
              <option value="Tech">Tech</option>
              <option value="Personal">Personal</option>
              <option value="Education">Education</option>
              <option value="Inspiration">Inspiration</option>
            </select>
          </div>
          <div className={styles.flexRow}>
            <Label>Publish Now?</Label>
            <Switch checked={isPublished} onCheckedChange={() => setIsPublished(!isPublished)} />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="edit">
        <TabsList className="mb-4">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <div className="space-y-2">
            <div className={styles.toolbar}>
              <Button variant="outline" onClick={() => applyMarkdown('**')}>Bold</Button>
              <Button variant="outline" onClick={() => applyMarkdown('_')}>Italic</Button>
              <Button variant="outline" onClick={() => setContent(prev => prev + '\n![alt text](image-url)')}>Image</Button>
              <Button variant="outline" onClick={() => setContent(prev => prev + '\n## Heading')}>Heading</Button>
            </div>
            <Textarea
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here using markdown..."
              className={styles.textarea}
            />
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <div className={styles.preview} dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }} />
        </TabsContent>
      </Tabs>

      <Separator className="my-6" />

      <div className={styles.center}>
        <Button onClick={handleSubmit} className={styles.publishButton}>Publish Blog</Button>
      </div>
    </div>
  );
};

export default BlogEditor;
