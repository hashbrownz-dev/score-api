const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema(
    {
        initials : { type: String, require : true },
        score : { type: Number, require : true }
    },
    { timestamps : true }
)

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;