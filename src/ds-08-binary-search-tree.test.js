
import { Node } from './ds-08-binary-search-tree';


it('Validate recognizes a valid BST', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
  
    expect(Node.validate(n)).toEqual(true);
  });
  
  it('Validate recognizes an invalid BST', () => {
    const n = new Node(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    n.left.left.right = new Node(999);
  
    expect(Node.validate(n)).toEqual(false);
  });