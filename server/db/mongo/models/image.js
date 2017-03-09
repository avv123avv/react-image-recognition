/**
 * Schema Definitions
 *
 */
import mongoose     from 'mongoose';
import uuid         from 'node-uuid';

const ImageSchema = new mongoose.Schema({
    id                      : { type: String, default: uuid.v4() },
    originalImageUrl        : String,
    serialNumberImageUrl    : String,
    serialNumber            : String,
    referenceNumber         : String,
    userFeedback            : Boolean,
    createdAt               : { type: Date, default: Date.now }
});

export default mongoose.model('Image', ImageSchema);

